import React, { Fragment, useEffect } from 'react';
import { fetchTopItems } from '../actions/actionsStore';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';


export default function Bestsellers() {
    const {items, loading, error} = useSelector(state => state.serviceList);
    const dispatch                = useDispatch();

    useEffect(() => {
        dispatch(fetchTopItems())
    }, [dispatch]);

    const handleOrder = (name, item) => {
        localStorage.setItem(name, JSON.stringify(item))
    };

    if (loading) {
        return (
            <div className='preloader'>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        )
    }

    if (error) {
        console.log('error',error);
        return (
            <div className="alert alert-danger" role="alert">
                Error: {error}
            </div>
        );
    }

    return (
        <>
            <div className="container">
                <div className="row">
                    <section className='top-sales'>
                        <h2 className='text-center'>Хиты продаж!</h2>
                        <div className="row">
                            {items.map(o => (
                                <div className="col-4" key={o.id} onLoad={() => {fetchTopItems()}}>
                                    <div className="card">
                                        <img src={o.images[0]} className="card-img-top img-fluid" alt={o.title}/>
                                        <div className="card-body">
                                            <p className="card-text">{o.title.split(' ', 2).join(' ')}</p>
                                            <p className="card-text">{o.price} руб.</p>
                                            <NavLink to={'/catalog/' + o.id} className='btn btn-outline-primary' onClick={()=> handleOrder (o.id, o)}>
                                                Заказать
                                            </NavLink>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
}