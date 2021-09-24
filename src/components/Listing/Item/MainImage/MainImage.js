import React from 'react';
import PropTypes from 'prop-types';

function MainImage(props) {
    const { url, url_570xN } = props;

    return (
        <div className="item-image">
            <a href={url}>
                <img src={url_570xN}/>
            </a>
        </div>
    )
}

MainImage.propTypes = {
    url: PropTypes.string.isRequired,
    url_570xN: PropTypes.string.isRequired,
};

export default MainImage;

