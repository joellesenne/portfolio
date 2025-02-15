import PropTypes from 'prop-types';

export  default function Content({children}) {
    return (
        <article className="content">
            {children}
        </article>
    );
}

Content.propTypes = {
    name: PropTypes.string.isRequired,
    children: PropTypes.node
};