import React from "react";
export default class Widget extends React.Component {
    render () {
        const {header,headerLink} = this.props.Widget;
        return (
            <div className={'widget'}>
                <div className={'widget-header'}>
                    <a href={headerLink}>{header}</a>
                </div>
                <div className={'widget-body'}>
                    ${this.props.children}
                </div>
            </div>
        );
    }
}