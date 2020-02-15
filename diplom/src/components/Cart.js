import React, { Fragment, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import useReactRouter from 'use-react-router';

import { addInBasket, sendOrder } from '../actions/actionsStore';
import { serviceBasketCount } from '../actions/actionCreators';


export default function Cart() {
    const [arr, setLocalArr]        = useState([]);
    const dispatch                  = useDispatch();
    const {history}                 = useReactRouter();
    const [disabled, setDisabled]   = useState(true);

    const [inputData, setInputData] = useState({
        phone     : '',
        address   : '',
        agreement : false
    });

    const handleDeleteFromBasket = (el) => {
        const items = JSON.parse(localStorage.getItem("items"));
        let found   = items.findIndex(o => o.id === el.id);
        items.splice(found, 1);
        localStorage.setItem("items", JSON.stringify(items));
        setLocalArr(items);
        dispatch(addInBasket(items));
        setDisabled(true);

        if(arr.length === 1) {
            setInputData({
                phone   : '',
                address : '',
                isAgree   : false
            });
            localStorage.clear()
        }
    };

    useEffect(() => {
        const items = JSON.parse(localStorage.getItem("items"));
        setLocalArr(items);
        if(items && items.length > 0) {
            setDisabled(false)
        }
    }, []);

    const handleSetInput = ({target}) => {
        const {id, checked} = target;
        const value = target.type === 'checkbox' ? checked : target.value;

        setInputData(prev => ({...prev, [id]: value}))
    };

    const handleSendOrder = (evt) => {
        evt.preventDefault();

        if(arr) {
            const orderFields = ['count', 'id', 'price'];
            const userFields  = ['phone', 'address'];

            const items = arr.map( el => {
                let currentOrder = Object.keys(el)
                    .filter( key => orderFields.includes(key) )
                    .reduce((obj, key) => {
                        return {
                            ...obj, [key]: el[key]
                        };
                    }, {});

                return currentOrder;
            });

            const userData = Object.keys(inputData)
                .filter( key => userFields.includes(key) )
                .reduce((obj, key) => {
                    return {
                        ...obj, [key]: inputData[key]
                    };
                }, {});

            const data = Object.assign({}, {'owner': userData}, {'items': items});

            dispatch(sendOrder(data));

            setInputData({
                phone   : '',
                address : '',
                isAgree : false
            });

            localStorage.clear();
            history.replace('/cart/success');
            dispatch(serviceBasketCount(0))
        }
    };

    return (
        <>
            <section className="cart container">
                <h2 className="text-center">Корзина</h2>
                <table className="table table-bordered">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Название</th>
                        <th scope="col">Размер</th>
                        <th scope="col">Кол-во</th>
                        <th scope="col">Стоимость</th>
                        <th scope="col">Итого</th>
                        <th scope="col">Действия</th>
                    </tr>
                    </thead>
                    <tbody>
                    {arr &&
                    (<>
                        {arr.map((item, id) => {
                            return (
                                <tr key={id}>
                                    <th scope="row">{id + 1}</th>
                                    <td><NavLink to={'/catalog/' + item.id}>{item.title}</NavLink></td>
                                    <td>{item.size}</td>
                                    <td>{item.count}</td>
                                    <td>{item.price} руб.</td>
                                    <td>{item.price * item.count} руб.</td>
                                    <td>
                                        <button className="btn btn-outline-danger btn-sm" onClick={() => handleDeleteFromBasket(item)}>Удалить</button>
                                    </td>
                                </tr>
                            )}
                        )}
                        <tr>
                            <td colSpan="5" className="text-right">Общая стоимость</td>
                            <td>{arr.reduce((acc, el) => acc + (el.price * el.count), 0)} руб.</td>
                        </tr>
                    </>)
                    }
                    </tbody>
                </table>
            </section>

            <section className="order">
                <h2 className="text-center">Оформить заказ</h2>
                <div className="card" style={{maxWidth: '30rem', margin: 'auto'}}>
                    <form className="card-body">
                        <div className="form-group">
                            <label htmlFor="phone">Телефон</label>
                            <input className="form-control" id="phone" placeholder="Ваш телефон" onChange={handleSetInput} value={inputData.phone} disabled={disabled}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="address">Адрес доставки</label>
                            <input className="form-control" id="address" placeholder="Адрес доставки" onChange={handleSetInput} value={inputData.address} disabled={disabled}/>
                        </div>
                        <div className="form-group form-check">
                            <input type="checkbox" className="form-check-input" id="agreement" onChange={handleSetInput} checked={inputData.agreement} disabled={disabled}/>
                            <label className="form-check-label" htmlFor="agreement" >Согласен с правилами доставки</label>
                        </div>
                        <button
                            type="submit"
                            className="btn btn-outline-secondary"
                            onClick={handleSendOrder}
                            disabled={!(inputData.phone.length > 0 && inputData.address.length > 0 && inputData.agreement)}>
                            Оформить
                        </button>
                    </form>
                </div>
            </section>
        </>
    )
}