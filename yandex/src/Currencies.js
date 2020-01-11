import React from "react";

/**
 * компонент отображает валюты
 * */

export default class Currencies extends React.Component {
    render () {
        const {data} = this.props.currencies;
        return (
            <div>
                {data.map((item) => {
                    return (
                        <div>
                            <a href={item.link}>{item.name}</a>
                            <span>item.value</span>
                            <span>{item.trand}</span>
                        </div>
                    )
                })}
            </div>
        );
    }
}