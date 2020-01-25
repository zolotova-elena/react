import React,{ useState } from 'react'
import {NavLink, Redirect} from 'react-router-dom'

export default function CreatePost() {
    const [form, setForm] = useState({
        id      : '',
        content : ''
    });

    const handleChange = (e) => {
        const {value} = e.target;
        setForm(prev => ({...prev, id: 0, content: value}));
    };

    const handleSubmit = () => {
        fetch(process.env.REACT_APP_DATA_URL, {
            method: 'Post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(form)
        })
            /*
            .then(response => response.json())
            .then(data => {
                console.log('create post', data);
            });
            */

    };

    return (

        <div className={'container'}>
            <h1>Создать пост</h1>
            <NavLink className="btn btn-outline-primary close" to='/' exact ><i className="fa fa-times" aria-hidden="true"/></NavLink>
            <br/>
            <form>
                <div className="form-group">
                    <label htmlFor="textarea1">Введите текст</label>
                    <textarea className="form-control" id={'textarea1'} name={'content'} rows="3" value={form.content} onChange={handleChange}/>
                </div>
                <div className="row">
                    <NavLink className="btn btn-outline-primary" to='/' exact onClick={handleSubmit}>Опубликовать</NavLink>
                </div>
            </form>
        </div>
    )
}