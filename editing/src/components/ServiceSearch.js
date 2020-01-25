import React, { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {updateSearch} from '../actions/actionCreators';

export default function ServiceSearch () {
    const search = useSelector(state => state.serviceSearch);
    const dispatch = useDispatch();

    const handleChange = useCallback(event => {
        const {value} = event.target;
        dispatch(updateSearch(value));
    }, [dispatch]);

    return (
        <div>
            <form action="">
                <input name='search' onChange={handleChange}  value={search.value} placeholder='Поиск' />
            </form>
        </div>
    );
}