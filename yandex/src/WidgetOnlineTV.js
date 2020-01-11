import React from "react";
import Widget from "./Widget";

/**
 * компонент отображает виджет "Эфир"
 * Widget - компонет для отображения виджета
 * */

export default class WidgetOnlineTV extends React.Component {
    render () {
        let {header, headerLink, items} = this.props.widgetOnlineTV;

        return (
            <Widget header={header} link={headerLink}>
                {items.map((item) => {
                    return (
                        <a href={item.link}>{item.value}</a>
                    );
                })}

            </Widget>
        );
    }
}