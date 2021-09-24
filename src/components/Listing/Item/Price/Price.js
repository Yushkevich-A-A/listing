import React from 'react';
import PropTypes from 'prop-types';

function Price(props) {
    const { price, currency_code } = props;

    const displayPrice = (currency_code === 'USD') ? '$' + price :
                            (currency_code === 'EUR') ? '€' + price :
                            price + ' ' + currency_code;

    return (
        <p className="item-price">{displayPrice}</p>
    )
}

Price.propTypes = {
    price: PropTypes.number.isRequired,
    currency_code: PropTypes.string.isRequired,
};

export default Price;

