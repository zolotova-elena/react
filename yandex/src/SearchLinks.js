import React from "react";

/**
 * с помощью SearchLinks оторажаются ссылки "Видео" "Картинки" и т.д
 * */

export default class SearchLinks extends React.Component {
    render () {
        const {links} = this.props.links;
        return (
            <div className={'search-links'}>
                {links.map((item) => {
                    return <a href={item.link}>{item.value}</a>
                })}
            </div>
        );
    }
}