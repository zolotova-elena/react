import React from 'react';
//import ReactDom from 'react-dom';
import InputMask from 'react-input-mask';
import List from "./List";
import RowTraining from "./RowTraining";

export default class Form extends React.Component {
    state = {
        date : '',
        value : '',
        list : []
    };


    handleSubmit = (evt) => {
        evt.preventDefault();

        let {date, value} = this.state;
        if (date.length  === 8 && value !== '') {
            //const {addList} = this.props;
            //console.log(addList);
            let list = this.state.list;
            let isInList = false;
            list.forEach((item, i) => {
                if (item.date === date) {
                    list[i].value = Number(item.value) + Number(value);
                    isInList = true;
                }
            });
            if (isInList === false) {
                list.push(new RowTraining(date, value));
            }

            list = this.sortList(list);
            date = '';
            value = '';
            this.setState({list});
            this.setState({date, value});
        } else {
            alert('Неверный ввод!');
        }

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

    sortList = (list) => {
        //console.log('list',list);
        list.sort((a,b) => {return b.timeStamp > a.timeStamp});
        return list;
    };

    deleteTraining = (date) => {
        //console.log('date', date);
        let list = this.state.list;
        list = list.filter((item) => {
            return item.date !== date;
        });
        this.setState({list});
    };

    render(){
        let {date, value, list} = this.state;

        return(
            <>
                <form onSubmit={this.handleSubmit} className={'row col-6'}>
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
                <List list={list} deleteTraining={this.deleteTraining}/>
            </>
        );
    };
}