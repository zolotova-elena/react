import React from 'react'

export default class Form extends React.Component {
    state = {
        textarea : ''
    };

    handleChange = (evt) => {
        let textarea =  evt.currentTarget.value;
        this.setState({textarea});
    };

    onSubmit = (evt) => {
        evt.preventDefault();
        const {handleAdd} = this.props;
        const {textarea} = this.state;
        //console.log(textarea);
        handleAdd(textarea);
    };


    render () {
        const {textarea}  = this.state;

        return (
            <div className={'row'} >
                <form className={'col-4'} onSubmit={this.onSubmit}>
                    <div className={'form-group'}>
                        <label htmlFor="textarea">New note</label>
                        <textarea className={'form-control'} name={'textarea'} rows="3" value={textarea} onChange={this.handleChange}/>
                    </div>
                    <button type="submit" className="btn btn-outline-primary">Добавить</button>
                </form>
            </div>
        );
    }
}