import {
    FETCH_CATEGORIES_ITEMS_REQUEST,
    FETCH_CATEGORIES_ITEMS_ERROR,
    FETCH_CATEGORIES_ITEMS_SUCCESS

} from '../actions/actionTypes'

const initialState = {
    data: [],
    text: '',
    load: false,
    err: null,
}

export default function serviceCategoriesReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_CATEGORIES_ITEMS_REQUEST:
            return {
                ...state,
                load: true,
                err: null,
            };

        case FETCH_CATEGORIES_ITEMS_ERROR:
            const {err} = action.payload;
            return {
                ...state,
                load: false,
                err,
            };

        case FETCH_CATEGORIES_ITEMS_SUCCESS:
            const {data, text} = action.payload;
            return {
                ...state,
                data,
                text,
                load: false,
                err: null,
            };
        default:
            return state;
    }
}