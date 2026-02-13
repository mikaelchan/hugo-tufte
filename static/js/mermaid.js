(() => {
  const script = document.createElement('script');
  script.src = 'https://cdn.jsdelivr.net/npm/mermaid@11/dist/mermaid.min.js';
  script.onload = () => {
    mermaid.initialize({
      startOnLoad: true,
      theme: document.documentElement.dataset.theme === 'dark' ? 'dark' : 'default'
    });
  };
  document.head.appendChild(script);
})();
