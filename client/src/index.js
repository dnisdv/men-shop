import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


import { Provider } from 'react-redux'
import createAdminStore from './store/store'
import myDataProvider from './components/AdminPanel/Providers/myDataProvider'
import authProvider from './components/AdminPanel/Providers/authProvider'
import {
  BrowserRouter as Router,
} from "react-router-dom";
import { createHashHistory, createBrowserHistory } from 'history';

const dataProvider = myDataProvider('http://localhost:5000')
const history = createHashHistory();
const browserH = createBrowserHistory()



const renderApp = () => {
  ReactDOM.render(
    <Router history={browserH}>
    <Provider store={createAdminStore({history, authProvider, dataProvider})}>
        <App myHistory={history}/>
    </Provider>
    </Router>,

    document.getElementById("root")
  );
}

(async () => renderApp())();
