(() => {
  const key = 'theme-preference';
  const root = document.documentElement;
  const button = document.getElementById('theme-toggle');

  const apply = (theme) => {
    root.dataset.theme = theme;
    if (button) button.textContent = theme === 'dark' ? '◑' : '◐';
  };

  const saved = localStorage.getItem(key);
  if (saved === 'dark' || saved === 'light') {
    apply(saved);
  } else {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    apply(prefersDark ? 'dark' : 'light');
  }

  if (button) {
    button.addEventListener('click', () => {
      const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
      localStorage.setItem(key, next);
      apply(next);
    });
  }
})();
