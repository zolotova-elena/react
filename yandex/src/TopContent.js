import React from "react";
import News from "./News";
import AdvertisingTop from "./AdvertisingTop";
import Currencies from "./Currencies";

/**
 * компонент отвечает за отображение верхнего блока страницы, который включает в себя новости, рекламу справа и информацию о валютах
 * */

export default class TopContent extends React.Component {
    render () {
        const {newsHeader, advertisingTop, currencies } = this.props.topContent;
        return (
            <div className={'app-top'}>
                <div id={'news'}>
                    <News newsHeader={newsHeader}/>
                </div>
                <div id={'advertising-top'}>
                    <AdvertisingTop advertisingTop={advertisingTop}/>
                </div>
                <div id={'currencies'}>
                    <Currencies currencies={currencies}/>
                </div>
            </div>
        );
    }
}