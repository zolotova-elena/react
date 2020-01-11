import React from "react";

/**
 * Компонет отображает длинный блок с рекламой
 * */

export default class AdvertisingBody extends React.Component {
    render () {
        const {link, img, alt } = this.props.advertisingBody;
        return (
            <div className={'app-advertising'}>
                <a href={link}>
                    <img src={img} alt={alt}/>
                </a>
            </div>
        );
    }
}