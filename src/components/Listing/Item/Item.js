import React from 'react';
import PropTypes from 'prop-types';
import Title from './Title/Title';
import Quantity from './Quantity/Quantity';
import Price from './Price/Price';
import MainImage from './MainImage/MainImage';

function Item(props) {
    const { item } = props;

    return (
        <div className="item">
            <MainImage url={item.url} url_570xN={item.MainImage.url_570xN}/>
            <div className="item-details">
                <Title title={item.title}/>
                <Price price={item.price} currency_code={item.currency_code}/>
                <Quantity quantity={item.quantity}/>
            </div>
        </div>
    )
}

Item.propTypes = {
    item: PropTypes.object.isRequired,
};

export default Item;

