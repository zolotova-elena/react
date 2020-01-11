import React from 'react';
//import logo from './logo.svg';

export default class Card extends React.Component {
    render () {

        const {header, body, btnSrc} = this.props.item;
        return (
            <div className="card" >
                {this.props.children}
                <div className="card-body">
                    <h5 className="card-title">{header}</h5>
                    <p className="card-text">{body}</p>
                    <a href={btnSrc} className="btn btn-primary">Переход куда-нибудь</a>
                </div>
            </div>
        );
    }
}