import React, { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { removeService, editService } from '../actions/actionCreators';

export default function ServiceList() {
    const items = useSelector(state => state.serviceList);
    const search = useSelector(state => state.serviceSearch);
    const dispatch = useDispatch();

    const handleEdit = useCallback((id, name, price) => {
        dispatch(editService(id, name, price));
    }, [dispatch]);

    const handleRemove = useCallback(id => {
        dispatch(removeService(id));
    }, [dispatch]);

    return (
        <ul>
            {items.map(o => {
                //console.log('search',search, search.value);
                if (o.name.indexOf(search.value) !== -1 || search.value === '') {
                    return (
                        <li key={o.id}>
                            <span>{o.name}</span>
                            <span>{o.price}</span>
                            <span role='img' aria-label='edit' onClick={() => handleEdit(o.id, o.name, o.price)}><i
                                className="fa fa-pencil" aria-hidden="true"/></span>
                            <span role='img' aria-label='delete' onClick={() => handleRemove(o.id)}>❌</span>
                        </li>
                    )
                } else {
                    return null;
                }

            })}
        </ul>
    );
}