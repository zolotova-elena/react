import React from 'react';
//import ReactDom from 'react-dom';

export default class Toolbar extends React.Component {
    render(){
        const {filters, selected, onSelectFilter} = this.props;
        //console.log('selected',selected);
        const btns = filters.map((item) => {
            let cn = item == selected ? 'btn-secondary' : '';

            return (
                <button type="button"
                        className={`btn ${cn}`}
                        key={item}
                        onClick={() => onSelectFilter(item)}>
                    {item}
                </button>
            );
        });
        return(
            <div className={'row'}>
                {btns}
            </div>
        );
    };
}