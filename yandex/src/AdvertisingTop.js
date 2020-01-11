import React from "react";


/**
 * компонент отображает рекламу в верхнем правом углу страницы
 * */

export default class AdvertisingTop extends React.Component {
    render () {
        const {img, link, title, alt, serviceName} = this.props.advertisingTop;
        return (
            <div>
                <a href={link}>
                    <div>
                        <img src={img} alt={alt}/>
                    </div>
                    <div>
                        {title}
                    </div>
                </a>
                <div>
                    {serviceName}
                </div>
            </div>
        );
    }
}
