/* 打字机效果 - 动态字幕 */
document.addEventListener('DOMContentLoaded', () => {
  const target = document.querySelector('.site-subtitle'); // butterfly 默认选择器
  if (!target) return;

  const text = '杰哥';          // 想轮播的字可以放数组
  const speed = 250;            // 打字间隔 ms
  let i = 0;

  function type() {
    if (i < text.length) {
      target.textContent += text.charAt(i++);
      setTimeout(type, speed);
    } else {
      // 可选：全部打出后等待 1.5s 再清空重来
      setTimeout(() => {
        target.textContent = '';
        i = 0;
        type();
      }, 1500);
    }
  }
  type();
});