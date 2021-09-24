import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item/Item';

function Listing(props) {
    const { data } = props;
    return (
        <div className='item-list'>
            {
                data.map( item => {
                    return (item.state === 'active')
                            ? <Item key={item.listing_id} item={item}/>
                            : null ;
                })
            }
        </div>
    )
}

Listing.propTypes = {
    data: PropTypes.array.isRequired,
};

export default Listing;

