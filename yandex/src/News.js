import React from 'react';
import New from './New';

/**
 * компонент отвечает за отображение блока новостей, который включает в себя оторажение фильтров новостей и сами новости
 * новости отобраются с помощью компонента New
 * */

export default class News extends React.Component {
    render () {
        const {newsHeader} = this.props.newsHeader;
        return (
            <div>
                <div className={'header-news'}>
                    {newsHeader.map((item) => {
                        return (
                            <a href={item.href} className={item.active ? 'active' : ''}>item.value</a>
                        )
                    })}
                </div>
                <div className={'body-news'}>
                    {newsHeader.map((item) => {
                        return (
                            <div className={item.active ? 'active' : ''}>
                                {  item.map((newProps) => { return <New item={newProps}/>})  }
                            </div>
                        );

                    })}
                </div>
            </div>
        );
    }
}
