import React from 'react';
//import ReactDom from 'react-dom';

export default class ShopCard extends React.Component {
    render() {
        const {item} = this.props;

        return (
            <div className="card col-lg-4 col-md-4 col-sm-4 col-xs-4"
                 >
                <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{item.color}</h6>
                    <p className="card-text">
                        <img src={item.img} alt={''}/>
                    </p>

                    <div className="card-link">
                        <span className="price">${item.price}</span>
                        <span type="button"
                              className={`btn btn-secondary`}>
                                ADD TO CART
                            </span>
                    </div>
                </div>
            </div>

        );
    }
}