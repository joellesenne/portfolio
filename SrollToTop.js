"use strict"

const ScrollToTop = () => {
    const scrollTopButton = document.getElementById('js-top');

    window.addEventListener('scroll', () => {
        let y = window.scrollY;

        scrollTopButton.className = (y > 1000) ? 'scroll-top show' : 'scroll-top hide';
    });
}

export default ScrollToTop