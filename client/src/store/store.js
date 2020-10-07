import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk'


import userReducer from '../reducers/userReducer'
import productsReducer from '../reducers/productsReducer'
import bannerReducer from '../reducers/bannerReducer'
import cartReducer from '../reducers/cartReducer'
import orderReducer from '../reducers/orderReducer'
import checkoutReducer from '../reducers/checkoutReducer'
import productReducer from '../reducers/productReducer'

export default () => {
    const reducer = combineReducers({
        user: userReducer,
        products : productsReducer,
        banner : bannerReducer,
        cart : cartReducer,
        order : orderReducer,
        checkout : checkoutReducer,
        product: productReducer
    });


    const middleware = [thunk]

    const composeEnhancers =
    (process.env.NODE_ENV === 'development' &&
        typeof window !== 'undefined' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            trace: true,
            traceLimit: 25,
        })) ||
    compose;


    const store = createStore(
        reducer,
        {},
        composeEnhancers(
            applyMiddleware(
                ...middleware,
            ),
        ),        
    );

    return store;
};