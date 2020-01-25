import React,{ useState, useEffect } from 'react';
import {NavLink} from 'react-router-dom';
import useJsonFetch from './useJsonFetch';

export default function ChangePage ({match}) {
    const [data] = useJsonFetch(process.env.REACT_APP_DATA_URL, []);
    const id = Number(match.params.id);

    const [form, setForm] = useState({
        id: id,
        content: ''});

    useEffect(()=> {
        if(data.length > 0) {
            let d = data.find(i => i.id == match.params.id);
            setForm(prev => ({...prev, content: d.content}));
        }
    }, [data, match.params.id]);

    const handleChange = (e) => {
        const {value} = e.target;
        setForm(prev => ({...prev, content: value}))
    };

    const handleSubmit = () => {
        fetch(process.env.REACT_APP_DATA_URL, {
            method: 'Post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(form)
        })

    };

    return (
        <div className={'container'}>
            <h1>Карточка редактирования</h1>
            <NavLink className="btn btn-outline-primary close" to={`/posts/${form.id}`} exact ><i className="fa fa-times" aria-hidden="true"/></NavLink>
            <br/>
            <form>
                <div className="form-group">
                    <label htmlFor="textarea1">Введите текст</label>
                    <textarea className="form-control" id={'textarea1'} name={'content'} rows="3" value={form.content} onChange={handleChange}/>
                </div>
                <div className="row">
                    <NavLink className="btn btn-outline-primary" to='/' exact onClick={handleSubmit}>Сохранить</NavLink>
                </div>
            </form>
        </div>
    )
}