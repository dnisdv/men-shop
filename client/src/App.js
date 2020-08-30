import React,{ useState, useRef, useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header'
import MainPage from './Pages/MainPage/MainPage'
import Footer from './components/Footer/Footer'
import ProductsPage from './Pages/ProductsPage/ProductsPage';
import ProductPage from './Pages/ProductPage/ProductPage'
import AuthPage from './Pages/AuthPage/AuthPage';
import CartPage from './Pages/CartPage/CartPage'
import CheckoutPage from './Pages/CheckoutPage/CheckoutPage'
import AccountPage from './Pages/AccountPage/AccountPage'
import {themes, ThemeContext} from './Context/theme-context'
import AdminPanel from './components/AdminPanel/AdminPanel';
// import PublicRoute from './Routes/PublicRoute'
import PrivateRoute from './Routes/PrivateRoute'
import {connect} from 'react-redux'
import {getCartProducts, addToCart, getCartLength} from './actions/cartActions'
import {
  Switch,
  Route
} from "react-router-dom";
import {checkLogin} from './actions/userActions'


function App({checkLogin, getCartProducts, getCartLength, history, preloader}) {
  useEffect(() => {
    checkLogin()
    getCartLength()
    getCartProducts()
  }, [checkLogin, getCartLength, getCartProducts])

  const [themeHandler, setthemeHandler] = useState(themes.light)
  const toggleTheme = (theme) => {
    if(!theme) return setthemeHandler( theme.light === theme ? theme.dark : theme.light)
    setthemeHandler(theme)
  } 
  const headerRef = useRef()
  const footerRef = useRef()

  if(preloader) return <span className='Main_Preloader'></span>
  return (
    <React.Fragment>
        <ThemeContext.Provider value={themeHandler}>
          <div style={{ backgroundColor: themeHandler.background }} className="App">
              <Header headerRef={headerRef} />
              <Switch>
              <Route exact path='/admin' render={ () => <AdminPanel 
                      headerRef={headerRef}
                      footerRef={footerRef}
                      history={history}
                    />} /> 
                <PrivateRoute path='/account' component={AccountPage} />
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
    </React.Fragment>
  );
}

const mapStateToProps = (state) => ({
  cart: state.cart.items,
  preloader : state.user.preloader,
});
export default connect(mapStateToProps,{getCartProducts, getCartLength,addToCart, checkLogin})(App)

// TODO CHANGE CHECKOUT PAGE