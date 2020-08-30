import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { routerMiddleware, connectRouter } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';
import { all, fork } from 'redux-saga/effects';
import {
    adminReducer,
    adminSaga,
    USER_LOGOUT
} from 'react-admin';

import thunk from 'redux-thunk'


import userReducer from '../reducers/userReducer'
import productsReducer from '../reducers/productsReducer'
import bannerReducer from '../reducers/bannerReducer'
import cartReducer from '../reducers/cartReducer'
import orderReducer from '../reducers/orderReducer'
import checkoutReducer from '../reducers/checkoutReducer'
import productReducer from '../reducers/productReducer'

export default ({
    authProvider,
    dataProvider,
    AdminHistory,
}) => {
    const reducer = combineReducers({
        admin: adminReducer,
        router: connectRouter(AdminHistory),

        user: userReducer,
        products : productsReducer,
        banner : bannerReducer,
        cart : cartReducer,
        order : orderReducer,
        checkout : checkoutReducer,
        product: productReducer
    });
    const resettableAppReducer = (state, action) =>
    reducer(action.type !== USER_LOGOUT ? state : undefined, action);


    const middleware = [thunk]

    const saga = function* rootSaga() {
        yield all(
            [
                adminSaga(dataProvider, authProvider),
                // add your own sagas here
            ].map(fork)
        );
    };
    const sagaMiddleware = createSagaMiddleware();

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
        resettableAppReducer,
        {},
        composeEnhancers(
            applyMiddleware(
                sagaMiddleware,
                routerMiddleware(AdminHistory),
                ...middleware,
            ),
            // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        ),        
    );


    sagaMiddleware.run(saga);
    return store;
};