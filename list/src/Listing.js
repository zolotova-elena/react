import React from 'react';
//import ReactDom from 'react-dom';
import PropTypes from 'prop-types';

export default class Listing extends React.Component {
    render() {
        const {items} = this.props;
        //console.log('items',items);
        return (
            <div className="item-list">
                {
                    items.map((item,i) => {
                        //console.log(i,item);
                        if (item.state === 'active') {
                            const key           = item.listing_id;
                            const image         = item.MainImage['url_570xN'];
                            const url           = item.url;
                            const currency_code = item.currency_code;
                            const currency      = currency_code === 'USD' ? '$' + item.price : currency_code === 'EUR' ? '€' + item.price : item.price + currency_code;
                            const quantityClass = item.quantity < 10 ? 'level-low' : item.quantity < 20 ? 'level-medium' : 'level-high';
                            const title         = item.title.length > 50 ? item.title.slice(0, 50) + '...' : item.title;
                            const quantity      = item.quantity;

                            return (
                                <div className="item" key={key}>
                                    <div className="item-image">
                                        <a href={url}>
                                            <img src={image} alt=""/>

                                        </a>
                                    </div>
                                    <div className="item-details">
                                        <p className="item-title">{title}</p>
                                        <p className="item-price">{currency}</p>
                                        <p className={'item-quantity ' + quantityClass}>{quantity} left</p>
                                    </div>
                                </div>
                            );
                        } else {
                            return null;
                        }

                    })
                }
            </div>
        )


    }
}

Listing.defaultProps = {
    items : []
};

Listing.propTypes = {
    items : PropTypes.array
};