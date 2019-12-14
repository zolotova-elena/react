import React from 'react';
//import ReactDom from 'react-dom';

export default class IconSwitch extends React.Component {
    render(){
        const {icon,onSwitch} = this.props;

        return(
            <div className={'div-material-icons'} >
                <i className="material-icons"
                        key={icon}
                        onClick={() => onSwitch(icon)}>
                    {icon}
                </i>
            </div>
        );
    };
}