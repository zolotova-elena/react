import React from "react";
import Widget from "./Widget";

/**
 * компонент отображает виджет "Телепрограмма"
 * Widget - компонет для отображения виджета
 * */

export default class WidgetTV extends React.Component {
    render () {
        let {header, headerLink, items} = this.props.widgetTV;

        return (
            <Widget header={header} link={headerLink}>
                {items.map((item) => {
                    return (
                        <div>
                            <span>{item.time}</span>
                            <a href={item.channelLink}>{item.channel}</a>
                            <a href={item.programLink}>{item.program}</a>
                        </div>
                    );
                })}

            </Widget>
        );
    }
}