import React, { useEffect, Fragment, useState }  from 'react';
import { NavLink } from 'react-router-dom';
import { fetchCategories, fetchCategoriesItems, searchItems } from '../actions/actionsStore';
import { useSelector, useDispatch } from 'react-redux';
import Search from './Search';

export default function Catalog() {

    const {items, loading, error} = useSelector(state => state.serviceCategories);
    console.log(items, loading, error);
    const {data}                  = useSelector(state => state.serviceCategoriesItems);
    const {text}                  = useSelector(state => state.serviceSearch);
    const dispatch                = useDispatch();
    const [index, setIndex]       = useState(null);
    //const offset                  = '&offset=';
    let [num, setNum]             = useState(6);

    function handleClick (evt, id) {
        dispatch(fetchCategoriesItems(id, '', text));
        setIndex(id);
        setNum(6);
    }

    function clickLoadMore() {
        let sum = parseInt(num)+6;
        setNum(() => sum);
        //let out = offset + num;
        let out = num;
        dispatch(fetchCategoriesItems(index, out, text));
    }

    useEffect(() => {
        dispatch(fetchCategories());
        dispatch(fetchCategoriesItems()) ;
        dispatch(searchItems(text));
    }, [text, dispatch]);

    const handleToBasket = (name, item) => {
        localStorage.setItem(name, JSON.stringify(item))
    };

    const checkLoading = () => {
        if (loading) {
            return (
                <div className='preloader'>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            );
        } else return null;
    };

    const checkError = () => {
        if (error) {
            console.log(error);
            return (
                <div className="alert alert-danger" role="alert">
                    Error: {error}
                </div>
            );
        }
    };

    //console.log('data',data);
    return (
        <section className='container catalog'>
            {checkLoading()}
            {checkError()}
            <h2 className='text-center'>Каталог</h2>

            <Search/>

            <ul className='catalog-categories nav justify-content-center'>
                <li className='nav-item'>
                    <a href={'#'}
                        className={index === null ? 'nav-link active' : 'nav-link'}
                        onClick={(evt) => handleClick(evt)}>Все</a>
                </li>
                {items.map( (item) => {
                    return(

                        <li className='nav-item' key={item.id}>
                            <a href={'#'}
                               className={item.id === index ? 'nav-link active' : 'nav-link'}
                               onClick={(evt) => handleClick(evt, item.id)}>{item.title}</a>
                        </li>
                    )
                })}
            </ul>
            {data.length > 0 &&
            (<>
                <div className='row'>
                    {data.map( (item) => (
                        <div className='col-4' key={item.id} >
                            <div className='card catalog-item-card' >
                                <img src={item.images[0]} className='card-img-top img-fluid' alt={item.title}
                                     style={{ width: '90%', height: 200, objectFit: 'cover' }} />
                                <div className='card-body'>
                                    <p className='card-text'>{item.title}</p>
                                    <p className='card-text'>{item.price} руб.</p>
                                    <NavLink to={'/catalog/' + item.id} exact className='btn btn-outline-primary' onClick={()=> handleToBasket(item.id, item)}>
                                        Заказать
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {data.length === 6 &&
                <div className='text-center'>
                    <button className='btn btn-outline-primary' onClick={() => clickLoadMore()}>Загрузить ещё</button>
                </div>}
            </>)
            }

        </section>
    )
}