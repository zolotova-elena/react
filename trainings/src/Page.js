import React from 'react';
//import ReactDom from 'react-dom';
import List from "./List";
import RowTraining from "./RowTraining";
import Form from "./Form";

export default class Page extends React.Component {
    state = {
        list : [
           /*{date: "10.10.10", value: "10", timeStamp: 1286654400},
           {date: "10.10.20", value: "3", timeStamp: 1602277200},
            {date: "10.10.15", value: "11", timeStamp: 1444424400}*/
        ]
    };


    addNewItem = (date, value) => {
        let list = this.state.list.slice();
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
        //list = this.sortList(list);

        this.setState({list});
    };


    deleteTraining = (date) => {
        //console.log('date', date);
        let listCopy = this.state.list.slice();
        const list = listCopy.filter((item) => {
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