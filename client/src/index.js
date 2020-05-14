import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));






// import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
// import thunk from 'redux-thunk'
// import { routerMiddleware, connectRouter } from 'connected-react-router';

// import {
//   adminReducer,
//   adminSaga,
// } from 'react-admin';

// import userReducer from '../reducers/userReducer'
// import productsReducer from '../reducers/productsReducer'
// import bannerReducer from '../reducers/bannerReducer'

// const initialState = {}

// const middleware = [thunk]



// export default ({
//   history,
// }) => {
//   const reducers = combineReducers({
//     router: connectRouter(history),
//     admin : adminReducer,
  
//     user: userReducer,
//     products : productsReducer,
//     banner : bannerReducer,
  
    
//   })
  
//   return createStore(
//     reducers,
//     initialState,
//     compose(
//       applyMiddleware(...middleware),
//       window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//     )
//   )
// }