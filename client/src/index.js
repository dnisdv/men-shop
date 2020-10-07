import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import axios from 'axios'
import { Provider } from 'react-redux'
import store from './store/store'
import {
  Router,
} from "react-router-dom";
import { createBrowserHistory } from 'history';

if(process.env.NODE_ENV !== "production"){
  axios.defaults.baseURL = "http://localhost:5000";
}

const history = createBrowserHistory()
const renderApp = () => {
  ReactDOM.render(
    <Provider store={store()}>
      <Router basename='/' history={history}>
            <App />
      </Router>
    </Provider>
    ,

    document.getElementById("root")
  );
}

(async () => renderApp())();
