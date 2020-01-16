import React from 'react';
//import ReactDom from 'react-dom';
import List from "./List";
import RowTraining from "./RowTraining";
import Form from "./Form";

export default class Page extends React.Component {
    state = {
        list : []
    };


    addNewItem = (date, value) => {
        //evt.preventDefault();

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

        this.setState({list});

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
        let {list} = this.state;

        return(
            <>
                <Form handleSubmit={this.addNewItem}/>
                <List list={list} deleteTraining={this.deleteTraining}/>
            </>
        );
    };
}