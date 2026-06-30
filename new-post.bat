@echo off
REM 快速创建并编辑新文章的脚本
REM 用法: new-post.bat "文章标题"
cd /d D:\blog
npx hexo new "%1"
start D:\blog\source\_posts
