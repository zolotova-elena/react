import React, { useState, useEffect, Fragment } from 'react'
import useJsonFetch from '../hooks/useJsonFetch'
import useReactRouter from 'use-react-router'
import { useDispatch } from 'react-redux'
import { addInBasket } from '../actions/actionsStore'


export default function Item ({match}) {
    const url = process.env.REACT_APP_CATEGORIES_ITEMS_URL + '/' + match.params.id;

    const [{data, loading, error}] = useJsonFetch(url);
    const [selected, setSelected]  = useState(false);
    const [object, setObject]      = useState({count: 0, size: '', url: ''});
    const [mark, setMark]          = useState(false);
    const {history}                = useReactRouter();
    const dispatch                 = useDispatch();

    const [form, setForm] = useState({
        title        : '',
        image        : '',
        sku          : '',
        manufacturer : '',
        color        : '',
        material     : '',
        reason       : '',
        season       : '',
        sizes        : [],
    });

    useEffect(() => {
        if(data.id !== undefined) {
            setForm({
                title        : data.title,
                image        : data.images[0],
                sku          : data.sku,
                manufacturer : data.manufacturer,
                color        : data.color,
                material     : data.material,
                reason       : data.reason,
                season       : data.season,
                sizes        : data.sizes
            })
        }
    }, [data]);

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
            console.log('error',error);
            return (
                <div className="alert alert-danger" role="alert">
                    Error: {error}
                </div>
            );
        }
    };

    const handleSelected = (evt) => {
        setSelected(!selected);
        const {textContent} = evt.target;
        setObject({
            ...object,
            size: textContent,
            url: document.location.href
        })
    };

    const handleCounterDec = () => {
        if(object.count === 0 ) {
            setObject({
                ...object,
                count: 0
            })
        } else if(object.count === 1) {
            setObject({
                ...object,
                count: object.count - 1
            });
            setMark(false)
        }
        else{
            setObject({
                ...object,
                count: object.count - 1
            })
        }
    };

    const handleCounterInc = () => {
        if(object.count === 10) {
            setObject({
                ...object,
                count: 10
            })
        } else {
            setMark(true);
            setObject({
                ...object,
                count: object.count + 1
            })
        }
    };

    const handleAddInBasket = () => {
        history.replace('/item');

        let objItems    = JSON.parse(localStorage.getItem(match.params.id));
        let obj         = Object.assign({}, objItems, object);
        let oldArrItems = JSON.parse(localStorage.getItem('allItems')) || [];

        if(oldArrItems.length > 0) {
            let objFind = oldArrItems.filter(o => o.id === obj.id && o.size === obj.size );
            if(objFind.length > 0) {
                objFind[0].count= objFind[0].count + obj.count
            } else {
                oldArrItems.push(obj)
            }
        } else {
            oldArrItems.push(obj)
        }

        localStorage.setItem('allItems', JSON.stringify(oldArrItems));
        dispatch(addInBasket(oldArrItems))
    };

    return (
        <>
            {checkLoading()}
            {checkError()}
            {form.title !== undefined &&
            <section className="catalog-item container catalog">
                <h2 className="text-center">{form.title}</h2>
                <div className="row">
                    <div className="col-5">
                        <img src={form.image} className="img-fluid" alt={form.title}/>
                    </div>
                    <div className="col-7">
                        <table className="table table-bordered">
                            <tbody>
                            <tr>
                                <td>Артикул</td>
                                <td>{form.sku}</td>
                            </tr>
                            <tr>
                                <td>Производитель</td>
                                <td>{form.manufacturer}</td>
                            </tr>
                            <tr>
                                <td>Цвет</td>
                                <td>{form.color}</td>
                            </tr>
                            <tr>
                                <td>Материалы</td>
                                <td>{form.material}</td>
                            </tr>
                            <tr>
                                <td>Сезон</td>
                                <td>{form.season}</td>
                            </tr>
                            <tr>
                                <td>Повод</td>
                                <td>{form.reason}</td>
                            </tr>
                            </tbody>
                        </table>
                        <div className="text-center">
                            <p>Размеры в наличии:
                                { form.sizes !== undefined &&
                                form.sizes.map((item, i) => item.avalible &&
                                    <span className={`catalog-item-size ${selected ? 'selected' : ''} `} key={i} onClick={handleSelected}>
                                        {item.size}
                                    </span> )
                                }
                            </p>
                            { form.sizes !== undefined &&
                            <p>Количество:
                                <span className="btn-group btn-group-sm pl-2">
                                    <button className="btn btn-secondary" onClick={handleCounterDec}>-</button>
                                    <span className="btn btn-outline-primary">{object.count}</span>
                                    <button className="btn btn-secondary" onClick={handleCounterInc}>+</button>
                                </span>
                            </p>
                            }
                        </div>
                        <button className='btn btn-danger btn-block btn-lg' disabled={mark && selected ? false : true} onClick={handleAddInBasket}>В корзину</button>
                    </div>
                </div>
            </section>
            }
        </>
    )
}