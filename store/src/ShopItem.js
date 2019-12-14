import React from 'react';
//import ReactDom from 'react-dom';

export default class ShopItem extends React.Component {
    render() {
        const {item} = this.props;
        //console.log('products',products);

        return (
            <tr >
                <td className={'list-img'}><img src={item.img} alt={''}/></td>
                <td>{item.name}</td>
                <td>{item.color}</td>
                <td>${item.price}</td>
                <td>
                        <span type="button"
                              className={`btn btn-secondary`}>
                                ADD TO CART
                            </span>
                </td>
            </tr>
        );
    }
}