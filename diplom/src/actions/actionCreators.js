import {
    SERVICE_BASKET_COUNT,

    FETCH_CATEGORIES_REQUEST,
    FETCH_CATEGORIES_ERROR,
    FETCH_CATEGORIES_SUCCESS,

    FETCH_CATEGORIES_ITEMS_REQUEST,
    FETCH_CATEGORIES_ITEMS_ERROR,
    FETCH_CATEGORIES_ITEMS_SUCCESS,

    FETCH_TOP_ITEMS_REQUEST,
    FETCH_TOP_ITEMS_ERROR,
    FETCH_TOP_ITEMS_SUCCESS,

    SEARCH_ITEM,

    FETCH_ORDER_SEND_SERVER,
    FETCH_ORDER_SUCCESS,
    FETCH_ORDER_ERROR


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
    type: FETCH_TOP_ITEMS_ERROR,
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


export const fetchOrderSendServer = (order) => ({
    type: FETCH_ORDER_SEND_SERVER,
    payload: {
        order
    }
});

export const fetchOrderSuccess = (order) => ({
    type: FETCH_ORDER_SUCCESS,
    payload: {
        order
    },
});

export const fetchOrderError = (error) => ({
    type: FETCH_ORDER_ERROR,
    payload: {
        error,
    },
});