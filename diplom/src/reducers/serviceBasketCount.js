import { SERVICE_BASKET_COUNT } from '../actions/actionTypes'

let initialState = {count: 5};
let items = JSON.parse(localStorage.getItem("allItems"));
if(items !== null) {
    initialState = {count: items.length}
}

export default function serviceBasketCount (state = initialState, action) {
   //console.log('state',state);
    switch (action.type) {
        case SERVICE_BASKET_COUNT:
            const {count} = action.payload;
            return {
                ...state,
                count
            };
        default:

            return state;
    }
}