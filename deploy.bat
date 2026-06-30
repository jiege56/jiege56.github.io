@echo off
REM 生成并部署博客到 GitHub Pages
cd /d D:\blog
call npx hexo generate
call npx hexo deploy
echo 部署完成！访问 https://jiege56.github.io 查看
pause
