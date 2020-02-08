import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { searchItems } from './../actions/actionsStore';


export default function Search () {
    const {text}   = useSelector(state => state.serviceSearch);
    const dispatch = useDispatch();

    const handleChange = ({target}) => {
        dispatch(searchItems(target.value))
    };

    return (
        <form className="catalog-search-form form-inline">
            <input className="form-control" placeholder="Поиск" value={text} onChange={handleChange} />
        </form>
    )
}