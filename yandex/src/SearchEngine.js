import React from "react";
import SearchLinks from "./SearchLinks";

/**
 * компонет отображает блок с поиском
 * с помощью SearchLinks оторажаются ссылки "Видео" "Картинки" и т.д
 * далее отображается сама форма поиска и рандомный пример для поиска
 * */

export default class SearchEngine extends React.Component {
    render () {
        const {search, random, links } = this.props.searchEngine;
        return (
            <div className={'app-search'}>

                <SearchLinks links={links} />

                <div className="input-group">
                    <img src={search.src} alt={search.alt}/>
                    <form action="">
                        <input type="text"/>
                        <div className="input-group-prepend">
                            <span className="input-group-text">Поиск</span>
                        </div>
                    </form>
                    <div className="search-random">
                        Найдется все. Например, <a href={random.link}>{random.value}</a>
                    </div>
                </div>
                
                
            </div>
        );
    }
}