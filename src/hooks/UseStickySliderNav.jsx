export const StickySliderNav = () => {
    const navSticky = document.getElementById('js-nav-sticky');
    const navTabs = document.querySelectorAll('.js-nav-tab');
    const sliders = document.querySelectorAll('.js-slider');
    const sticky = navSticky.offsetTop;

    const navStickyHandler = () => {
        if (window.scrollY >= sticky) {
            navSticky.classList.add('nav-sticky');
        } else {
            navSticky.classList.remove('nav-sticky');
        }

        const changeLinkState = () => {
            for (let i = sliders.length - 1; i >= 0; i--) {
                if (window.scrollY + 50 >= sliders[i].offsetTop) {
                    navTabs.forEach((tab) => tab.classList.remove('nav-tab-active'));
                    navTabs[i].classList.add('nav-tab-active');
                    break;
                }
            }
        };

        changeLinkState();
    };

    window.addEventListener('scroll', navStickyHandler);
};
