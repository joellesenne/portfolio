const toggleDarkMode = () => {
  const prefersDarkMQ = window.matchMedia('(prefers-color-scheme: dark)');
  let systemTheme = prefersDarkMQ.matches ? 'dark' : 'light';

  prefersDarkMQ.addEventListener('change', (e) => {
    systemTheme = e.matches ? 'dark' : 'light';
    if (localStorage.theme) setTheme(systemTheme);
  });

  const buttonDarkMode = document.getElementById('toggleDarkMode');
  let theme = document.documentElement.dataset.theme || 'dark';
  const setTheme = (newTheme) => {
    document.documentElement.dataset.theme = newTheme;
    theme = newTheme;
    if (newTheme === systemTheme) {
      localStorage.removeItem('theme');
    } else localStorage.setItem('theme', newTheme);
  };
  buttonDarkMode.addEventListener('click', (e) => {
    e.preventDefault();
    if (theme === 'dark') {
      setTheme('light');
      buttonDarkMode.textContent = 'dark mode';
    } else {
      setTheme('dark');
      buttonDarkMode.textContent = 'light mode';
    }
  });
};

export default toggleDarkMode;
