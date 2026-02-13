(function () {
  function copyText(text, button) {
    if (!navigator.clipboard) return Promise.reject(new Error('Clipboard API unavailable'));
    return navigator.clipboard.writeText(text).then(function () {
      var original = button.textContent;
      button.textContent = '已复制';
      button.classList.add('copied');
      window.setTimeout(function () {
        button.textContent = original;
        button.classList.remove('copied');
      }, 1200);
    });
  }

  function enhanceCodeBlocks() {
    var blocks = document.querySelectorAll('pre > code');
    blocks.forEach(function (codeBlock) {
      var pre = codeBlock.parentElement;
      if (!pre || pre.dataset.copyReady === 'true') return;
      pre.dataset.copyReady = 'true';

      var button = document.createElement('button');
      button.className = 'code-copy-btn';
      button.type = 'button';
      button.textContent = '复制';
      button.setAttribute('aria-label', '复制代码');
      pre.classList.add('code-block');
      pre.appendChild(button);

      button.addEventListener('click', function () {
        copyText(codeBlock.innerText, button).catch(function () {
          button.textContent = '复制失败';
          window.setTimeout(function () {
            button.textContent = '复制';
          }, 1000);
        });
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', enhanceCodeBlocks);
  } else {
    enhanceCodeBlocks();
  }
})();
