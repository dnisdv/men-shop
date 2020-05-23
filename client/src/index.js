import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


import { Provider } from 'react-redux'
import { createHashHistory } from 'history';
import createAdminStore from './store/store'

const history = createHashHistory();


const renderApp = () => {
  ReactDOM.render(
    <Provider store={createAdminStore({history})}>
        <App myHistory={history}/>
    </Provider>
        ,
    document.getElementById("root")
  );
}

(async () => renderApp())();
