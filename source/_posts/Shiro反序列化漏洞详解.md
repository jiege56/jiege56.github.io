---
title: Shiro反序列化漏洞详解
date: 2026-06-30 16:00:00
tags: [安全研究, Java安全, 反序列化, Shiro, 漏洞分析]
categories: [安全研究]
cover: https://s.panlai.com/zb_users/upload/2025/03/bizhihui_com_202503251742906624124197.jpg-arthumbs
---

# 序列化

## 1. Shiro框架的基本功能与架构

Apache Shiro 是一个强大的 Java 安全框架，它提供了**认证（Authentication）、授权（Authorization）、加密（Cryptography）和会话管理（Session Management）**四大核心功能。Shiro 的目标是简化安全机制的实现，使得开发者可以快速、便捷地为任何规模的应用程序（从最小的移动应用到最大的企业级 Web 应用）添加安全性。

## 2. 核心模块详解

### 2.1 认证（Authentication）

- 用户身份识别：通过用户名/密码、token、第三方登录等方式验证用户。
- Subject API：提供 `Subject.login()` 方法进行登录操作。
- Realm 接口：用于连接外部数据源（如数据库、LDAP）进行身份验证。

### 2.2 授权（Authorization）

- 权限控制：基于角色或权限字符串进行访问控制。
- 支持声明式和编程式权限检查。
- 示例方法：`subject.hasRole("admin")`、`subject.isPermitted("user:delete")`

### 2.3 加密（Cryptography）

- 提供常见的加密算法封装，如 AES、MD5、SHA 等。
- 支持 Base64 编码解码。
- 用于保护敏感数据，例如记住我（RememberMe）功能中使用 AES 加密 cookie 数据。

### 2.4 会话管理（Session Management）

- 跨平台支持：不仅适用于 Web 应用，也适用于非 Web 环境（如桌面应用、服务端）。
- 提供 Session 接口，用于管理用户状态。
- 支持集群环境下的分布式会话。

# 反序列化

## 3. Shiro的反序列化机制

Shiro 在会话管理和"记住我"（RememberMe）功能中广泛使用了对象的序列化与反序列化机制。其主要流程如下：

### 3.1 RememberMe 功能的实现流程

当用户启用"记住我"功能并成功登录后，Shiro 会将用户的主体信息（Principal）进行序列化，然后使用 AES 加密，并通过 Base64 编码生成一个 Cookie 值返回给客户端浏览器。

**具体流程如下：**

1. 用户登录时选择"记住我"选项。
2. Shiro 将 `Subject` 对象中的 Principal（即用户身份信息）进行序列化。
3. 使用 AES 加密该序列化后的字节流（默认使用硬编码的 key：`kPH+bIxk5D2deZiIxcaaaA==`）。
4. 对加密后的字节流进行 Base64 编码。
5. 将结果写入名为 `rememberMe` 的 Cookie 中返回给客户端。

**当用户再次访问网站时，流程如下：**

1. 浏览器携带 `rememberMe` Cookie 发送请求。
2. Shiro 从 Cookie 中提取值并进行 Base64 解码。
3. 使用相同的 AES 密钥进行解密。
4. 对解密后的字节流进行反序列化，恢复成 `Subject` 对象。
5. 自动完成用户身份识别，实现免登录访问。

## 漏洞成因

Java 的序列化（Serialization）是指将对象转换为字节流以便于存储或传输的过程；而反序列化（Deserialization）则是将字节流还原为原始对象的过程。这一机制常用于网络通信、本地存储、会话保持等场景。

然而，如果反序列化过程中的输入被攻击者控制，则可能导致严重的安全问题。Java 原生的反序列化机制（`java.io.ObjectInputStream.readObject()`）在处理对象时会自动调用对象的 `readObject()` 方法，若该方法中存在危险逻辑（如执行命令），则攻击者可以构造特定的恶意类来触发任意代码执行。

## 4. Shiro反序列化漏洞的触发条件

### 4.1 触发版本范围

- **Apache Shiro <= 1.2.4**
- **受影响的依赖库**：使用 Java 原生反序列化 + Apache Commons Collections（常见于早期版本）

### 4.2 漏洞原理总结

1. Shiro 的 `rememberMe` Cookie 在处理过程中会进行 **Base64 解码 → AES 解密 → Java 反序列化**。
2. 因为 AES 密钥是硬编码的（`kPH+bIxk5D2deZiIxcaaaA==`），攻击者可以使用该密钥伪造一个恶意序列化对象。
3. 当 Shiro 反序列化该对象时，触发构造好的 Gadget Chain（如 Commons-Collections 利用链），最终导致**任意命令执行**。

## 5. Shiro-550 漏洞详解

Shiro组件（shiro-550）提供了 rememberMe 功能，将 cookie 中 rememberMe 字段内容分别进行**序列化、AES加密、Base64编码**操作，然后用户在请求网站时，Shiro 又会在识别身份的时候，对 cookie 里的 remember 字段反向解密。

**AES 加密的密钥 key 被硬编码在代码里**，导致攻击者可以序列化恶意类，再进行 AES、Base64 编码，传递到服务端进行反序列化执行任意代码。

![Shiro-550攻击流程](https://cdn.nlark.com/yuque/0/2026/png/62398637/1775887937040-51de65ab-3492-48ce-9ba0-f6cf717c41aa.png)

## 6. Shiro-721 漏洞详解

**漏洞原理：**

由于 Apache Shiro cookie 中通过 **AES-128-CBC 模式**加密的 rememberMe 字段存在问题，用户可通过 **Padding Oracle** 加密生成的攻击代码来构造恶意的 rememberMe 字段，并重新请求网站，进行反序列化攻击，最终导致任意代码执行。

**影响版本：** Apache Shiro < 1.4.2 版本。

## 7. Shiro-550 vs Shiro-721 对比总结

| 特性 | Shiro-550 | Shiro-721 |
| --- | --- | --- |
| 漏洞类型 | 硬编码密钥导致RCE | Padding Oracle攻击导致RCE |
| 利用条件 | AES密钥已知（硬编码） | 需要一个合法用户的RememberMe Cookie |
| 影响版本 | <= 1.2.4 | < 1.4.2 |
| 攻击难度 | 低（直接利用） | 中（需要Padding Oracle） |
| 修复方式 | 升级Shiro版本+更换密钥 | 升级至1.4.2+ |

## 8. 安全建议

1. **升级 Apache Shiro 至最新版本**（1.13.0+）
2. **更换默认 AES 密钥**，使用随机生成的强密钥
3. 如果不需要 RememberMe 功能，**禁用该功能**
4. 使用 **安全的序列化方案**（如 JSON、Protobuf 等替代 Java 原生序列化）
5. 部署 **WAF 规则**检测恶意反序列化 payload
6. 定期进行**安全审计和依赖检查**
