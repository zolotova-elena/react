import React from 'react';
//import ReactDom from 'react-dom';
import CardsView from './CardsView';
import ListView from "./ListView";
import IconSwitch from "./IconSwitch";

export default class Portfolio extends React.Component {
    cardIcon = 'view_module';
    listIcon = 'view_list';

    state = {
        icon : this.listIcon
    };

    onSwitch = (icon) => {
        if (icon == this.listIcon) {
            icon = this.cardIcon;
        } else {
            icon = this.listIcon;
        }
        this.setState({icon});
    };

    render(){
        const {products} = this.props;
        const {icon} = this.state;


        let view = '';
        if (this.listIcon == icon) {
            view = <CardsView products={products}/>;
        } else {
            view = <ListView products={products}/>;
        }

        return(
            <div className={'col-md-12'}>
                <div className="container">
                    <div className={'row col-lg-12 col-md-12 col-sm-12 col-xs-12'}>

                        <IconSwitch icon={icon}
                                    onSwitch={this.onSwitch}/>
                    </div>

                    {view}
                </div>
            </div>
        );
    };
}
