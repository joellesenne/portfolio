import { useStickySliderNav } from '../hooks/useStickySliderNav';

export  default function Navigation() {
    const { isNavSticky, isActiveTab, navTabs } = useStickySliderNav();

    return (
        <nav id="js-nav-sticky" className={`nav ${isNavSticky ? 'nav-sticky' : ''}`}>
            {navTabs.map((navTab, index) => (
                <a
                    key={index}
                    className={`nav-tab js-nav-tab ${isActiveTab === index ? 'active' : ''}`}
                    href={navTab.url}
                >
                    {navTab.titre}
                </a>

            ))}
        </nav>
    )
}