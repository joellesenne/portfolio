import PropTypes from 'prop-types';

export default function Layout({children}) {
    return (
        <main className="container">
            {children}
        </main>
    );
}

Layout.propTypes = {
    name: PropTypes.string.isRequired,
    children: PropTypes.node
};