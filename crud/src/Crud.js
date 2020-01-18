import React from 'react'

export default class Crud extends React.Component {
    state = {

    };

    loadActualNotes = () => { // обновление
        fetch(`${' http://localhost:7777/notes'}`)
            .then(response => response.json())
            .then(arr => arr.map(el => {
                console.log(el);
            }))
    };





    render () {
        this.loadActualNotes();
        return (
            <div>

            </div>
        );
    }
}