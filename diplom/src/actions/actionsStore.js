import {
    serviceBasketCount,
    fetchCategoriesRequest, fetchCategoriesError, fetchCategoriesSuccess,
    fetchCategoriesItemsRequest, fetchCategoriesItemsError, fetchCategoriesItemsSuccess,
    searchItem,
    fetchServicesRequest, fetchServicesFailure, fetchServicesSuccess,

    fetchOrderSendServer, fetchOrderSuccess, fetchOrderError,
} from './actionCreators';

export const fetchTopItems = () => async (dispatch) => {
    dispatch(fetchServicesRequest());
    try {
        const response = await fetch(`${process.env.REACT_APP_TOP_ITEMS_URL}`);
        if (!response.ok) {
            throw new Error(response.statusText)
        }
        const data = await response.json();
        dispatch(fetchServicesSuccess(data))
    } catch (error) {
        dispatch(fetchServicesFailure(error.message))
    }
};

export const fetchCategories = () => async (dispatch) => {
    //console.log('`${process.env.REACT_APP_CATEGORIES_URL}`',`${process.env.REACT_APP_CATEGORIES_URL}`);
    dispatch(fetchCategoriesRequest());
    try {
        const response = await fetch(`${process.env.REACT_APP_CATEGORIES_URL}`);

        if (!response.ok) {
            throw new Error(response.statusText);
        }
        const data = await response.json();
        dispatch(fetchCategoriesSuccess(data));
    } catch (error) {
        console.log('error',error);
        dispatch(fetchCategoriesError(error.message));
    }
};

export const fetchCategoriesItems = ( id = false, offset = false, text = false) => async (dispatch) => {
    dispatch(fetchCategoriesItemsRequest());
    if (offset !== false) {
        offset = '&offset=' + offset;
    }
    let requestStr = '';
    if(id && !offset && !text) {
        requestStr = `${process.env.REACT_APP_CATEGORIES_ITEMS_URL + '?categoryId=' + id}`;
    } else if(id && !offset && text) {
        requestStr = `${process.env.REACT_APP_CATEGORIES_ITEMS_URL + '?categoryId=' + id + '&q=' + text}`;
    } else if(id && offset) {
        requestStr = `${process.env.REACT_APP_CATEGORIES_ITEMS_URL + '?categoryId=' + id + offset}`;
    } else if(!id && !offset && !text) {
        requestStr = `${process.env.REACT_APP_CATEGORIES_ITEMS_URL}`;
    }  else if(!id && !offset && text) {
        requestStr = `${process.env.REACT_APP_CATEGORIES_ITEMS_URL + '?q=' + text}`;
    } else if(!id && offset && text) {
        requestStr = `${process.env.REACT_APP_CATEGORIES_ITEMS_URL + '?q=' + text + offset}`;
    }
    else if(!id && offset && !text) {
        requestStr = `${process.env.REACT_APP_CATEGORIES_ITEMS_URL + '?' + offset}`;
    }

    try {
        const response = await fetch(requestStr);
        if (!response.ok) {
            throw new Error(response.statusText)
        }
        const data = await response.json();
        dispatch(fetchCategoriesItemsSuccess(data, text))
    } catch (error) {
        console.log('error',error);
        dispatch(fetchCategoriesItemsError(error.message))
    }
};

export const searchItems = (text) => async (dispatch) => {
    console.log('text',text);
    dispatch(searchItem(text));
    if (text !== '') {
        try {
            const response = await fetch(`${process.env.REACT_APP_ITEM_URL + text}`);
            if (!response.ok) {
                throw new Error(response.statusText)
            }
            const data = await response.json();
            dispatch(fetchCategoriesItemsSuccess(data))
        } catch (error) {
            console.log('error',error);
            dispatch(fetchCategoriesItemsError(error.message))
        }
    }
};

export const addInBasket = (count) => (dispatch) => {
    dispatch(serviceBasketCount(count.length))
};


export const sendOrder = (order) => async (dispatch) => {
    const orderJson = JSON.stringify(order);
    dispatch(fetchOrderSendServer(orderJson));
    try {
        const response = await fetch(`${process.env.REACT_APP_ORDER_URL}`, {
            method: 'POST',
            'Access-Control-Allow-Origin': '*',
            headers: {'Content-Type': 'application/json'},
            body: orderJson,
        });
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        dispatch(fetchOrderSuccess(order))
    } catch (error) {
        console.log('error', error);
        dispatch(fetchOrderError(error.message))
    }
};
