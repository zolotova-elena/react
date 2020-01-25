import { UPDATE_SEARCH } from '../actions/actionTypes';

const initialState = {
    value: ''
};

export default function serviceSearchReducer(state = initialState, action) {
    switch (action.type) {
        case UPDATE_SEARCH: {
            const {value} = action.payload;

            return {value};
        }
        default:
            return state;
    }
}
