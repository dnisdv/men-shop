import React,{ useState, useRef } from 'react';
import './App.css';
import Header from './components/Header/Header'
import MainPage from './Pages/MainPage/MainPage'
import Footer from './components/Footer/Footer'
import ProductsPage from './Pages/ProductsPage/ProductsPage';
import ProductPage from './Pages/ProductPage/ProductPage'
import AuthPage from './Pages/AuthPage/AuthPage';
import CartPage from './Pages/CartPage/CartPage'
import CheckoutPage from './Pages/CheckoutPage/CheckoutPage'
import {themes, ThemeContext} from './Context/theme-context'
import { Provider } from 'react-redux'
import createAdminStore from './store/store'
import { createHashHistory } from 'history';
import AdminPanel from './components/AdminPanel/AdminPanel';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const history = createHashHistory();

function App() {

  const [themeHandler, setthemeHandler] = useState(themes.light)
  const toggleTheme = (theme) => {
    if(!theme) return setthemeHandler( theme.light === theme ? theme.dark : theme.light)
    setthemeHandler(theme)
  } 
  const headerRef = useRef()
  const footerRef = useRef()
  return (
  <Provider store={createAdminStore({history})}>

       <Router>

       <Route exact path='/admin' render={ () => <AdminPanel 
            history={history} 
            headerRef={headerRef}
            footerRef={footerRef}
            />} />

         <ThemeContext.Provider value={themeHandler}>
          <div style={{ backgroundColor: themeHandler.background }} className="App">
              <Header headerRef={headerRef} />
              <Switch>
                <Route path='/checkout' render={ () => <CheckoutPage footerRef={footerRef} headerRef={headerRef} />} />
                <Route path='/cart' component={CartPage} />
                <Route path='/auth' component={AuthPage} />
                <Route path="/product/:id" component={ProductPage} />
                <Route path="/products" component={ProductsPage} />
                <Route exact path="/" render={() => <MainPage changeTheme={toggleTheme} />}  />  
               </Switch>

              <Footer footerRef={footerRef} />
          </div>
        </ThemeContext.Provider> 
      </Router>

    </Provider>
    

  );
}

export default App
