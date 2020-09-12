import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


import { Provider } from 'react-redux'
import createAdminStore from './store/store'
import myDataProvider from './components/AdminPanel/Providers/myDataProvider'
import authProvider from './components/AdminPanel/Providers/authProvider'
import {
  Router,
} from "react-router-dom";
import { createBrowserHistory } from 'history';

const history = createBrowserHistory({basename:"/"})
const dataProvider = myDataProvider('http://localhost:5000')
const renderApp = () => {
  ReactDOM.render(
    <Provider store={createAdminStore({history, authProvider, dataProvider})}>
      <Router basename='/' history={history}>
            <App />
      </Router>
    </Provider>
    ,

    document.getElementById("root")
  );
}

(async () => renderApp())();
