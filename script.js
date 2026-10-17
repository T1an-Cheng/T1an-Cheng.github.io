(() => {
  const button = document.querySelector('.theme-toggle');
  const systemPreference = window.matchMedia('(prefers-color-scheme: dark)');
  const currentTheme = () => document.documentElement.dataset.theme || (systemPreference.matches ? 'dark' : 'light');
  const syncButton = () => {
    const dark = currentTheme() === 'dark';
    button.classList.toggle('is-dark', dark);
    button.setAttribute('aria-label', `Switch to ${dark ? 'light' : 'dark'} theme`);
  };
  button.hidden = false;
  syncButton();
  button.addEventListener('click', () => {
    const next = currentTheme() === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    try { localStorage.setItem('tian-theme', next); } catch (_) {}
    syncButton();
  });
  systemPreference.addEventListener('change', syncButton);
})();
