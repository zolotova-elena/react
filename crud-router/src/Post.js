import React,{ useState, useEffect } from 'react'
import {NavLink} from 'react-router-dom';
import useJsonFetch from './useJsonFetch';


export default function Post ({match}) {
    const [data] = useJsonFetch(process.env.REACT_APP_DATA_URL, []);
    const url = process.env.REACT_APP_DATA_URL + '/' + match.params.id;

    const [form, setForm] = useState({
        id: match.params.id,
        content: match.params.content});

    useEffect(()=> {
        if(data.length > 0) {
            let d = data.find(i => i.id == match.params.id);
            setForm(prev => ({...prev, content: d.content}));
        }
    }, [data, match.params.id]);


    const handleDelete = () => {
        fetch(url, {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(form)
        })
    };

    return (
        <div className={'container'}>
            <h1>Страница просмотра</h1>
            <br/>
            <div className="card border-primary" >
                <div className="card-header bg-primary text-white">
                </div>
                <div className="card-body">
                    <p className="card-text">{form.content}</p>
                </div>
            </div>
            <div className="row">
                <NavLink className="btn btn-outline-primary" to={ match.params.id + '/edit'} exact>Изменить</NavLink>
                <NavLink className="btn btn-outline-danger" to='/' exact onClick={handleDelete}>Удалить</NavLink>
            </div>


        </div>
    )
}