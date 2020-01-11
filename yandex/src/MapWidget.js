import React from "react";
import Widget from "./Widget";

/**
 * компонент отображает виджет "Карта"
 * Widget - компонет для отображения виджета
 * */

export default class MapWidget extends React.Component {
    render () {
        const {header, headerLink, items} = this.props.mapWidget;
        return (
            <Widget header={header} link={headerLink}>
                {items.map((item) => {
                    return (
                        <div>
                            <a href={item.link}>{item.value}</a>
                        </div>
                    );
                })}

            </Widget>
        );
    }
}