import React, {Fragment} from 'react'
import { NavLink } from 'react-router-dom';
import useJsonFetch from './useJsonFetch';
import moment from 'moment';

export default function HeadPage() {
    const [data] = useJsonFetch(process.env.REACT_APP_DATA_URL, []);

    console.log('data',data);

    return (
        <div className={'container'}>
            <h1>Главная</h1>
                <NavLink className="btn btn-outline-primary" to='/posts/new' exact>Добавить пост</NavLink>
            <br/>
            {
                data.map((item, i) => {
                    return(
                        <NavLink className="id" to={'/posts/' + item.id} exact  key={i}>
                            <div className="card border-primary" key={i}>


                                <div className="card-header bg-primary text-white">
                                    {moment(1579808365364).format('YYYY-MM-DD HH:mm')}
                                </div>
                                <div className="card-body">
                                    <p className="card-text">{item.content}</p>
                                </div>
                            </div>
                        </NavLink>


                    )
                })
            }

        </div>
    );
}