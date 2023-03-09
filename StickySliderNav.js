"use strict"

const StickySliderNav = () => {
    const navSticky = document.getElementById('js-nav-sticky')
    const navTabs = document.querySelectorAll('.js-nav-tab');
    const slider = document.querySelectorAll('.js-slider');
    const sticky = navSticky.offsetTop;

    window.addEventListener('scroll', () => NavSticky());

    const NavSticky = () => {
        if (window.scrollY >= sticky) {
            navSticky.classList.add("nav-sticky")
        } else {
            navSticky.classList.remove("nav-sticky");
        }

        const changeLinkState = () => {
            let index = slider.length;

            while(index-- && window.scrollY + 50 < slider[index].offsetTop) {}

            navTabs.forEach((navTab) => navTab.classList.remove('nav-tab-slider'));
            navTabs[index].classList.add('nav-tab-slider');
        }
        changeLinkState()
    }



}

export default StickySliderNav