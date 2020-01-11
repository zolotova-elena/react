import React from "react";
import Widget from "./Widget";

/**
 * компонент отображает виджет "Посещаемое"
 * Widget - компонет для отображения виджета
 * */

export default class WidgetVisits extends React.Component {
    render () {
        const {header, headerLink, items} = this.props.widgetVisits;
        return (
            <Widget header={header} link={headerLink}>
                {items.map((item) => {
                    return (
                        <div>
                            <a href={item.link}>{item.value}</a>
                            -
                            <a href={item.example.link}>{item.example.name}</a>
                        </div>
                    );
                })}

            </Widget>
        );
    }
}