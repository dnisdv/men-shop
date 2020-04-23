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




import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import AdminPanel from './Pages/AdminPanel/AdminPanel';


function App() {

  const [themeHandler, setthemeHandler] = useState(themes.light)


  const toggleTheme = (theme) => {
    if(!theme) return setthemeHandler( theme.light === theme ? theme.dark : theme.light)
    setthemeHandler(theme)
  } 

  const headerRef = useRef()
  const footerRef = useRef()

  return (
    
    <Router>
      {/* <ThemeContext.Provider value={themeHandler}>
        <div style={{ backgroundColor: themeHandler.background }} className="App">
            <Header headerRef={headerRef} />
            <Switch>
              <Route path='/checkout' render={ () => <CheckoutPage footerRef={footerRef} headerRef={headerRef} />} />
              <Route path='/cart' component={CartPage} />
              <Route path='/auth' component={AuthPage} />
              <Route path="/product" component={ProductPage} />
              <Route path="/products" component={ProductsPage} />
              <Route exact path="/" render={() => <MainPage changeTheme={toggleTheme} />}  />
            </Switch>
            <Footer footerRef={footerRef} />
        </div>
      </ThemeContext.Provider> */}

      <AdminPanel />
    </Router>

  );
}

export default App
