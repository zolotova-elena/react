import {SEARCH_ITEM} from '../actions/actionTypes'

const initialState = {
    data: [],
    text: ''
};

export default function serviceSearch (state = initialState, action) {
    switch (action.type) {
        case SEARCH_ITEM:
            const {text} = action.payload;
            return {
                ...state,
                text
            };

        default:
            return state;
    }


}