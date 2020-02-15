import {
    FETCH_ORDER_SEND_SERVER,
    FETCH_ORDER_SUCCESS,
    FETCH_ORDER_ERROR

} from '../actions/actionTypes'

const initialState = {
    order : '',
    load  : false,
    error : null
};

export default function serviceSendOrderReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_ORDER_SEND_SERVER:
            return {
                ...state,
                load: true,
                error: null
            };

        case FETCH_ORDER_SUCCESS:
            const {order} = action.payload;
            return {
                ...state,
                order,
                error: null
            };
        case FETCH_ORDER_ERROR:
            const {err} = action.payload;
            return {
                ...state,
                load: false,
                error : err,
            };
        default:
            return state;
    }
}