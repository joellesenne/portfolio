import React, { useEffect, useState } from 'react';

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

export  default function Navigation() {
    const [isNavSticky, setIsNavSticky] = useState(false);
    const [activeTab, setActiveTab] = useState(0);

    useEffect(() => {
        const navSticky = document.getElementById('js-nav-sticky');
        // const navTabs = document.querySelectorAll('.js-nav-tab');
        const sliders = document.querySelectorAll('.js-slider');
        const sticky = navSticky.offsetTop;

        const navStickyHandler = () => {
            setIsNavSticky(window.scrollY >= sticky);

            for (let i = sliders.length - 1; i >= 0; i--) {
                if (window.scrollY + 50 >= sliders[i].offsetTop) {
                    setActiveTab(i);
                    break;
                }
            }
        };

        window.addEventListener('scroll', navStickyHandler);

        return () => {
            window.removeEventListener('scroll', navStickyHandler);
        };
    }, []);
    return (
        <nav id="js-nav-sticky" className={`nav ${isNavSticky ? 'nav-sticky' : ''}`}>
            {navTabs.map((tab, index) => (
                <a
                    key={index}
                    className={`nav-tab js-nav-tab ${activeTab === index ? 'active' : ''}`}
                    href={tab.url}>{tab.titre}</a>

            ))}
        </nav>
    )
}