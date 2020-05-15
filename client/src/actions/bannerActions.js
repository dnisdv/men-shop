import {
    LOADING_BANNERS,
    GET_BANNERS,
    GET_BANNERS_ERROR
  } from '../types'
  import axios from 'axios'
  
export const get_banners = () => (dispatch) => {
    dispatch({ type:LOADING_BANNERS })
    return axios.get('http://localhost:5000/api/banner')
    .then( (res) => {
        dispatch({
            type:GET_BANNERS,
            payload: res.data
        })
    })
    .catch( (err) => {
        dispatch({
            type:GET_BANNERS_ERROR,
            payload:err.response
        })
    })
}











// import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
// import { routerMiddleware, connectRouter } from 'connected-react-router';
// import createSagaMiddleware from 'redux-saga';
// import { all, fork } from 'redux-saga/effects';
// import {
//     adminReducer,
//     adminSaga,
//     USER_LOGOUT,
// } from 'react-admin';

// import thunk from 'redux-thunk'


// import userReducer from '../reducers/userReducer'
// import productsReducer from '../reducers/productsReducer'
// import bannerReducer from '../reducers/bannerReducer'

// export default ({
//     authProvider,
//     dataProvider,
//     history,
// }) => {
//     const reducer = combineReducers({
//         admin: adminReducer,
//         router: connectRouter(history),

//         user: userReducer,
//         products : productsReducer,
//         banner : bannerReducer,
//     });
    
//     const resettableAppReducer = (state, action) =>
//     reducer(action.type !== USER_LOGOUT ? state : undefined, action);


//     const middleware = [thunk]


//     const saga = function* rootSaga() {
//         yield all(
//             [
//                 adminSaga(authProvider, dataProvider),
//                 // add your own sagas here
//             ].map(fork)
//         );
//     };
//     const sagaMiddleware = createSagaMiddleware();


//     const store = createStore(
//         resettableAppReducer,
//         { /* set your initial state here */ },
//         compose(
//             applyMiddleware(
//                 sagaMiddleware,
//                 routerMiddleware(history),
//                 ...middleware
//             ),
//         ),        
//     );
//     sagaMiddleware.run(saga);
//     return store;
// };