(() => {
  let pendingG = false;
  let pendingTimer;

  const clearPending = () => {
    pendingG = false;
    if (pendingTimer) clearTimeout(pendingTimer);
  };

  const isEditable = (el) => {
    if (!el) return false;
    const tag = el.tagName;
    return el.isContentEditable || tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT';
  };

  const scrollByViewport = (ratio) => {
    window.scrollBy({ top: Math.round(window.innerHeight * ratio), behavior: 'smooth' });
  };

  document.addEventListener('keydown', (event) => {
    if (event.defaultPrevented || event.metaKey || event.ctrlKey || event.altKey) return;
    if (isEditable(document.activeElement)) return;

    const key = event.key;

    if (pendingG) {
      if (key === 'g') {
        event.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      clearPending();
      return;
    }

    switch (key) {
      case 'j':
        event.preventDefault();
        scrollByViewport(0.25);
        break;
      case 'k':
        event.preventDefault();
        scrollByViewport(-0.25);
        break;
      case 'd':
        event.preventDefault();
        scrollByViewport(0.5);
        break;
      case 'u':
        event.preventDefault();
        scrollByViewport(-0.5);
        break;
      case 'G':
        event.preventDefault();
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
        break;
      case 'g':
        pendingG = true;
        pendingTimer = setTimeout(clearPending, 450);
        break;
      default:
        break;
    }
  });
})();
