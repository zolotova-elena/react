import React from 'react';
//import ReactDom from 'react-dom';
import ShopItem from "./ShopItem";

export default class ListView extends React.Component {
    render() {
        const {products} = this.props;
        //console.log('products',products);

        return (
            <table className={'table'} key={'table1'}>
                <tbody>
                {products.map((item) => {
                    return (
                        <ShopItem key={item.id} item={item}/>

                    );
                })}
                </tbody>
            </table>

        );
    }
}