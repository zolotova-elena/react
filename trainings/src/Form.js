import React from 'react';
//import ReactDom from 'react-dom';
import InputMask from 'react-input-mask';

export default class Form extends React.Component {
    state = {
        date : '',
        value : ''
    };

    checkNumber = (value) => {
        value = value.replace(/[^\d.]*/g, '')
            .replace(/^[^\d]*(\d+([.]\d{0,5})?).*$/g, '$1');
        return value;
    };
    numberHandler = (evt) => {
        let value = evt.currentTarget.value;
        //console.log(value);
        if (value !== '') {
            value = this.checkNumber(value);
        }

        this.setState({value});
    };
    dateHandler = (evt) => {
        let date = evt.currentTarget.value;
        this.setState({date});
    };


    handleSubmitForm = (evt) => {
        evt.preventDefault();
        let {handleSubmit} = this.props;

        let {date, value} = this.state;
        if (date.length  === 8 && value !== '') {
            //const {addList} = this.props;
            //console.log(addList);
            handleSubmit(date,value);
            date = '';
            value = '';
            this.setState({date, value});
        } else {
            alert('Неверный ввод!');
        }
    };

    render(){
        const {date, value} = this.state;

        return(
            <form onSubmit={this.handleSubmitForm} className={'row col-6'}>
                <div className="form-group col-4">
                    <label htmlFor="date">Дата (ДД.ММ.ГГ)</label>
                    <InputMask type="text" className="form-control" id="date" value={date} mask="99.99.99" onChange={this.dateHandler}/>

                </div>
                <div className="form-group col-4">
                    <label htmlFor="km">Пройдено км</label>
                    <input type="text" className="form-control" id="km" value={value} onChange={this.numberHandler}/>
                </div>
                <div className={'col-4'}>
                    <button type="submit" className="btn btn-outline-dark">OK</button>
                </div>
            </form>
        );
    };
}