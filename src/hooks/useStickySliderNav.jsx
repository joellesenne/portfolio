import { useEffect, useState } from 'react';

export const useStickySliderNav = () => {
    const navTabs = [
        {
            titre: "Home",
            url: "#home",
            active: ""
        },
        {
            titre: "Project",
            url: "#project",
            active: ""
        },
        {
            titre: "Lab",
            url: "#lab",
            active: ""
        },
        {
            titre: "Blog",
            url: "#blog",
            active: ""
        },
        {
            titre: "Photos",
            url: "#photos",
            active: ""
        },
        {
            titre: "About",
            url: "#about",
            active: ""
        }
    ]
    const [isNavSticky, setIsNavSticky] = useState(false);
    const [isActiveTab, setIsActiveTab] = useState(0);

    useEffect(() => {
        const navSticky = document.getElementById('js-nav-sticky');
        let sliders = document.querySelectorAll('.js-slider');
        const sticky = navSticky.offsetTop;

        const navStickyHandler = () => {
            setIsNavSticky(window.scrollY >= sticky);

            for (let i = sliders.length - 1; i >= 0; i--) {
                if (window.scrollY + 50 >= sliders[i].offsetTop) {
                    setIsActiveTab(i);
                    break;
                }
            }
        };

        window.addEventListener('scroll', navStickyHandler);

        return () => {
            window.removeEventListener('scroll', navStickyHandler);
        };
    }, []);



    return { isNavSticky, isActiveTab, navTabs };
};