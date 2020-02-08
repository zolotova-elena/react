import {
    SERVICE_BASKET_COUNT,

    FETCH_CATEGORIES_REQUEST,
    FETCH_CATEGORIES_ERROR,
    FETCH_CATEGORIES_SUCCESS,

    FETCH_CATEGORIES_ITEMS_REQUEST,
    FETCH_CATEGORIES_ITEMS_ERROR,
    FETCH_CATEGORIES_ITEMS_SUCCESS,

    FETCH_TOP_ITEMS_REQUEST,
    FETCH_TOP_ITEMS_FAILURE,
    FETCH_TOP_ITEMS_SUCCESS,

    SEARCH_ITEM,


} from './actionTypes';


export const serviceBasketCount = count => ({
    type: SERVICE_BASKET_COUNT,
    payload: {
        count,
    },
});

export const fetchCategoriesRequest = () => ({
    type: FETCH_CATEGORIES_REQUEST,
});

export const fetchCategoriesError = error => ({
    type: FETCH_CATEGORIES_ERROR,
    payload: {
        error,
    },
});

export const fetchCategoriesSuccess = items => ({
    type: FETCH_CATEGORIES_SUCCESS,
    payload: {
        items,
    },
});

export const fetchCategoriesItemsRequest = () => ({
    type: FETCH_CATEGORIES_ITEMS_REQUEST,
});

export const fetchCategoriesItemsError = err => ({
    type: FETCH_CATEGORIES_ITEMS_ERROR,
    payload: {
        err,
    },
});

export const fetchCategoriesItemsSuccess = (data, text) => ({
    type: FETCH_CATEGORIES_ITEMS_SUCCESS,
    payload: {
        data,
        text
    },
});

export const searchItem = (text) => ({ // поиск
    type: SEARCH_ITEM,
    payload: {
        text
    }
});

export const fetchServicesRequest = () => ({
    type: FETCH_TOP_ITEMS_REQUEST,
});

export const fetchServicesFailure = error => ({
    type: FETCH_TOP_ITEMS_FAILURE,
    payload: {
        error,
    },
});

export const fetchServicesSuccess = items => ({
    type: FETCH_TOP_ITEMS_SUCCESS,
    payload: {
        items,
    },
});

//***//




