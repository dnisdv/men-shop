import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { routerMiddleware, connectRouter } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';
import { all, fork } from 'redux-saga/effects';
import {
    adminReducer,
    adminSaga,
    USER_LOGOUT,
} from 'react-admin';

import thunk from 'redux-thunk'


import userReducer from '../reducers/userReducer'
import productsReducer from '../reducers/productsReducer'
import bannerReducer from '../reducers/bannerReducer'

export default ({
    history,
}) => {
    const reducer = combineReducers({
        admin: adminReducer,
        router: connectRouter(history),

        user: userReducer,
        products : productsReducer,
        banner : bannerReducer,
    });
    
    const resettableAppReducer = (state, action) =>
    reducer(action.type !== USER_LOGOUT ? state : undefined, action);


    const middleware = [thunk]


    const saga = function* rootSaga() {
        yield all(
            [
                adminSaga(),
                // add your own sagas here
            ].map(fork)
        );
    };
    const sagaMiddleware = createSagaMiddleware();


    const store = createStore(
        resettableAppReducer,
        { /* set your initial state here */ },
        compose(
            applyMiddleware(
                sagaMiddleware,
                routerMiddleware(history),
                ...middleware,
            ),
            window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        ),        
    );
    sagaMiddleware.run(saga);
    return store;
};