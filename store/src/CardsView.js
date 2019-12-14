import React from 'react';
//import ReactDom from 'react-dom';
import ShopCard from "./ShopCard";

export default class CardsView extends React.Component {
    render() {
        const {products} = this.props;

        return (
            <div className={'row'} key={'blocks'}>
                {products.map((item,index) => {
                    return (
                        <ShopCard key={item.id} item={item}/>
                    );
                })}
            </div>

        );
    }
}