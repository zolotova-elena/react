import {
    serviceBasketCount,
    fetchCategoriesRequest, fetchCategoriesError, fetchCategoriesSuccess,
    fetchCategoriesItemsRequest, fetchCategoriesItemsError, fetchCategoriesItemsSuccess,
    searchItem,
    fetchServicesRequest, fetchServicesFailure, fetchServicesSuccess,
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
    if(id && !offset && !text) { // 1
        try {
            const response = await fetch(`${process.env.REACT_APP_CATEGORIES_ITEMS_URL + '?categoryId=' + id}`);
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            const data = await response.json();
            dispatch(fetchCategoriesItemsSuccess(data));
        } catch (error) {
            console.log('error',error);
            dispatch(fetchCategoriesItemsError(error.message))
        }
    } else if(id && !offset && text) { //2
        try {
            const response = await fetch(`${process.env.REACT_APP_CATEGORIES_ITEMS_URL + '?categoryId=' + id + '&q=' + text}`)
            if (!response.ok) {
                throw new Error(response.statusText)
            }
            const data = await response.json();
            dispatch(fetchCategoriesItemsSuccess(data, text))
        } catch (error) {
            console.log('error',error);
            dispatch(fetchCategoriesItemsError(error.message))
        }
    } else if(id && offset) { //3
        try {
            const response = await fetch(`${process.env.REACT_APP_CATEGORIES_ITEMS_URL + '?categoryId=' + id + offset}`);
            if (!response.ok) {
                throw new Error(response.statusText)
            }
            const data = await response.json();
            dispatch(fetchCategoriesItemsSuccess(data))
        } catch (error) {
            console.log('error',error);
            dispatch(fetchCategoriesItemsError(error.message))
        }
    } else if(!id && !offset && !text) { //4
        try {
            const response = await fetch(`${process.env.REACT_APP_CATEGORIES_ITEMS_URL}`);
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            const data = await response.json();
            dispatch(fetchCategoriesItemsSuccess(data));
        } catch (error) {
            console.log('error',error);
            dispatch(fetchCategoriesItemsError(error.message));
        }
    }  else if(!id && !offset && text) { //5
        try {
            const response = await fetch(`${process.env.REACT_APP_CATEGORIES_ITEMS_URL + '?q=' + text}`);
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            const data = await response.json();
            dispatch(fetchCategoriesItemsSuccess(data));
        } catch (error) {
            console.log('error',error);
            dispatch(fetchCategoriesItemsError(error.message));
        }
    } else if(!id && offset && text) { // 6
        try {
            const response = await fetch(`${process.env.REACT_APP_CATEGORIES_ITEMS_URL + '?q=' + text + offset}`);

            if (!response.ok) {
                throw new Error(response.statusText);
            }
            const data = await response.json();
            dispatch(fetchCategoriesItemsSuccess(data, text));
        } catch (error) {
            console.log('error',error);
            dispatch(fetchCategoriesItemsError(error.message));
        }
    }
    else if(!id && offset && !text) {
        try {
            const response = await fetch(`${process.env.REACT_APP_CATEGORIES_ITEMS_URL + '?' + offset}`);

            if (!response.ok) {
                throw new Error(response.statusText);
            }
            const data = await response.json();

            dispatch(fetchCategoriesItemsSuccess(data));
        } catch (error) {
            console.log('error',error);
            dispatch(fetchCategoriesItemsError(error.message));
        }
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

