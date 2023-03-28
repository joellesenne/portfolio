'use strict';

const ToggleDarkMode = () => {
  const prefersDarkMQ = window.matchMedia('(prefers-color-scheme: dark)');
  let systemTheme = prefersDarkMQ.matches ? 'dark' : 'light';

  prefersDarkMQ.addEventListener('change', (e) => {
    systemTheme = e.matches ? 'dark' : 'light';
    if (localStorage.getItem('theme')) setTheme(systemTheme);
  });

  const buttonDarkMode = document.getElementById('toggleDarkMode');
  let theme = document.documentElement.getAttribute('data-theme') || 'dark';
  const setTheme = (newTheme) => {
    document.documentElement.setAttribute('data-theme', newTheme);
    theme = newTheme;
    if (newTheme === systemTheme) {
      localStorage.removeItem('theme');
    } else localStorage.setItem('theme', newTheme);
  };
  buttonDarkMode.addEventListener('click', (e) => {
    e.preventDefault();
    if (theme === 'dark') {
      setTheme('light');
      buttonDarkMode.innerHTML = 'dark mode';
    } else {
      setTheme('dark');
      buttonDarkMode.innerHTML = 'light mode';
    }
  });
};

export default ToggleDarkMode;
