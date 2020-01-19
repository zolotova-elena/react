import React from 'react'
import Notes from "./Notes";
import Form from "./Form";
require('dotenv').config();

export default class Crud extends React.Component {
    state = {
        notes : []
    };

    loadActualNotes = () => { // обновление
        fetch(`${process.env.REACT_APP_CURRENCY_URL}/notes`)
            .then(response => response.json())
            .then((notes) => {
              //console.log('notes',notes);
              this.setState({notes});
            })
            .catch((error) => {
                //console.log('error',error);
            });
    };

    handleAdd = (text) => { // добавление
        //evt.preventDefault();
        //console.log('text',text);
        fetch(`${process.env.REACT_APP_CURRENCY_URL}/notes`, {
            method: 'POST',
            //headers: {'Content-Type': 'application/json;charset=utf-8'},
            body: JSON.stringify({
                "id": 0,
                "content": text
            })
        })
        .then(response => {
            response.json();
            //console.log('response',response);
            if (response.ok) {
                this.loadActualNotes();
            }
        })
        .then((result) => {
            //console.log('result',result);
        })
        .catch((error) => {
            console.log('error',error);
        })
    };

    componentDidMount () {
        this.loadActualNotes();
    };

    handleDelete = (id) => { // удаление
        //let {notes} = this.state;
        //console.log('notes',notes);
        fetch(`${process.env.REACT_APP_CURRENCY_URL}/notes/${id}`, {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'}
        })
        .then(body => {
            let urlId = body.url.split('/');
            //console.log('body',body);
            return urlId[urlId.length - 1]
        })
        .catch((error) => {
            //console.log('error',error);
        })
        .then((id) => {
            /*console.log('id',id);
            id = Number(id);
            let newNotes = notes.filter((item) => {
                console.log(item.id, item.id !== id);
                return item.id !== id;
            });
            console.log(newNotes);
            this.setState({notes});
            */
            this.loadActualNotes();
        })
    };



    render () {
        const {notes} = this.state;

        return (
            <div className={'col-12'}>
                <h3>
                    Notes&nbsp;&nbsp;
                    <i className="fa fa-2x fa-refresh" id={'notes-update'} aria-hidden="true" onClick={this.loadActualNotes}></i>
                </h3>
                <Notes notes={notes} handleDelete={this.handleDelete}/>
                <Form handleAdd={this.handleAdd}/>
            </div>
        );
    }
}