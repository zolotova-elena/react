import React from "react";

/**
 * компонет отображает строку с новостью
 * */

export default class New extends React.Component {
    render () {
        const {img, link, title, alt} = this.props.item;
        return (
            <a href={link}>
                <img src={img} alt={alt}/>
                <span>{title}</span>
            </a>
        );
    }
}
