const ScrollToTop = () => {
  const scrollTopButton = document.getElementById('js-top');

  const handleScroll = () => {
    let y = window.scrollY;

    scrollTopButton.classList.toggle('show', y > 1000);
    scrollTopButton.classList.toggle('hide', y <= 1000);
  };

  window.addEventListener('scroll', handleScroll);

  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
};

export default ScrollToTop;
