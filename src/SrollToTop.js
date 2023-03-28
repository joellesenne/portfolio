'use strict';

const ScrollToTop = () => {
  const scrollTopButton = document.getElementById('js-top');

  window.addEventListener('scroll', () => {
    let y = window.scrollY;

    scrollTopButton.classList.toggle('show', y > 1000);
    scrollTopButton.classList.toggle('hide', y <= 1000);
  });
};

export default ScrollToTop;
