import React from 'react';
//import ReactDom from 'react-dom';

export default class Form extends React.Component {
    state = {
        name : '',
        tz   : 0
    };
    nameHandler = (evt) => {
        let name =  evt.currentTarget.value;
        this.setState({name});
    };

    checkNumber = (value) => {
        value = value.replace(/[^\d-]*/g, '');
        if ( (value[0] === '-' && value.length > 1) || (value[0] !== '-' && value.length > 0)  ) {
            value = value.indexOf('-') > 0 ? 0 : Number(value);
        }

        return value;
    };

    numberHandler = (evt) => {
        let tz = evt.currentTarget.value;
        if (tz !== '') {
            tz = this.checkNumber(tz);
        }
        this.setState({tz});
    };

    handleSubmitForm = (evt) => {
        evt.preventDefault();
        let {addClock} = this.props;

        let {name, tz} = this.state;
        const tzNumber = Number(tz);
        if (tz !== '' && name !== '') {
            console.log(name, tz);
            addClock(name, tz);
            name = '';
            tz   = 0;
            this.setState({name, tz});
        } else {
            alert('Неверный ввод!');
        }
    };

    render(){
        const {name, tz} = this.state;

        return(
            <form onSubmit={this.handleSubmitForm} className={'row col-6'}>
                <div className="form-group col-4">
                    <label htmlFor="date">Название</label>
                    <input type="text" className="form-control" id="name" value={name} onChange={this.nameHandler}/>

                </div>
                <div className="form-group col-4">
                    <label htmlFor="km">Временная зона</label>
                    <input type="text" className="form-control" id="tz" value={tz} onChange={this.numberHandler}/>
                </div>
                <div className={'col-4'}>
                    <button type="submit" className="btn btn-outline-dark">OK</button>
                </div>
            </form>
        );
    };
}