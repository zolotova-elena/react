import React from 'react';
//import ReactDom from 'react-dom';

export default class Toolbar extends React.Component {
    render() {
        const {projects} = this.props;
        const elements = projects.map((item) => {
            return (
                <div
                    className={'col-lg-4 col-md-4 col-sm-4 col-xs-4 portfolio-list-item'}
                    key={item.id}>
                    <img src={item.img} alt={''}/>
                </div>
            );
        });

        return (
            <div className={'row'}>
                {elements}
            </div>

        );
    }
}