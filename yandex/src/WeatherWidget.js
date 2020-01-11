import React from "react";
import Widget from "./Widget";

/**
 * компонент отображает виджет погоды
 * Widget - компонет для отображения виджета
 * */

export default class WeatherWidget extends React.Component {
    render () {
        const {header,headerLink, img, alt, value, link, links} = this.props.weatherWidget;
        return (
            <Widget header={header} link={headerLink}>
                <a href={link}>
                    <img src={img} alt={alt}/>
                    <span>{value}</span>
                </a>
                {links.map((item) => {
                    return <a href={item.link}>{item.name}&nbsp;{item.value}</a>;
                })}

            </Widget>
        );
    }
}