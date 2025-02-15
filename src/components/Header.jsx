import PropTypes from 'prop-types';

export  default function Header({children}) {
    return (
        <header id="home" className="header scroll-snap js-slider">
            {children}
        </header>
    )
}

Header.propTypes = {
    name: PropTypes.string.isRequired,
    children: PropTypes.node
};
