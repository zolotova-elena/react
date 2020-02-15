import {
    FETCH_TOP_ITEMS_REQUEST,
    FETCH_TOP_ITEMS_ERROR,
    FETCH_TOP_ITEMS_SUCCESS

} from '../actions/actionTypes'

const initialState = {
    items: [],
    loading: false,
    error: null,
};

export default function serviceList (state = initialState, action) {
    switch (action.type) {
        case FETCH_TOP_ITEMS_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };

        case FETCH_TOP_ITEMS_ERROR:
            const {error} = action.payload;
            return {
                ...state,
                loading: false,
                error,
            };

        case FETCH_TOP_ITEMS_SUCCESS:
            const {items} = action.payload;
            return {
                ...state,
                items,
                loading: false,
                error: null,
            };

        default:
            return state;
    }
}