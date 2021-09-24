import React from 'react';
import PropTypes from 'prop-types';

function Quantity(props) {
    const { quantity } = props;

    const classQuantity = (quantity <= 10) ? 'level-low' : 
                            (quantity <= 20) ? 'level-medium' : 
                            'level-high';

    return (
        <p className={`item-quantity ${classQuantity}`}>{quantity} left</p>
    )
}

Quantity.propTypes = {
    quantity: PropTypes.number.isRequired,
};

export default Quantity;

