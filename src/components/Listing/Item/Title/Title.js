import React from 'react';
import PropTypes from 'prop-types';

function Title(props) {
    const { title } = props;

    const modifiedTitle = validityTitle(title);
    return (
        <p className="item-title">{modifiedTitle}</p>
    )
}

function validityTitle(str) {
    return (str.length >= 50) ? (str.substring(0, 51) + '...') : str ;
}

Title.propTypes = {
    title: PropTypes.string.isRequired,
};

export default Title;

