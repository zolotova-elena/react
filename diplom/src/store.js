import {
    createStore,
    combineReducers,
    applyMiddleware,
    compose,
} from 'redux';

import serviceList from './reducers/serviceList';
import serviceCategories from './reducers/serviceCategories';
import serviceCategoriesItems from './reducers/serviceCategoriesItems';
import serviceSearch from './reducers/serviceSearch';
import serviceBasketCount from './reducers/serviceBasketCount';
import serviceSendOrder from './reducers/serviceSendOrder';

import thunk from 'redux-thunk';

const reducer = combineReducers({
    serviceBasketCount     : serviceBasketCount,
    serviceList            : serviceList,
    serviceCategories      : serviceCategories,
    serviceCategoriesItems : serviceCategoriesItems,
    serviceSearch          : serviceSearch,
    serviceSendOrder       : serviceSendOrder
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(
    applyMiddleware(thunk)),
);

export default store;