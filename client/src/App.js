import React,{ useState } from 'react';
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


function App() {

  const [themeHandler, setthemeHandler] = useState(themes.light)


  const toggleTheme = (theme) => {
    if(!theme) return setthemeHandler( theme.light === theme ? theme.dark : theme.light)
    setthemeHandler(theme)
  } 

  return (
    
    <Router>
      <ThemeContext.Provider value={themeHandler}>
        <div style={{ backgroundColor: themeHandler.background }} className="App">
            <Header />
            <Switch>
              <Route path='/checkout' component={CheckoutPage} />
              <Route path='/cart' component={CartPage} />
              <Route path='/auth' component={AuthPage} />
              <Route path="/product" component={ProductPage} />
              <Route path="/products" component={ProductsPage} />
              <Route exact path="/" render={() => <MainPage changeTheme={toggleTheme} />}  />
            </Switch>
            <Footer />
        </div>
      </ThemeContext.Provider>
    </Router>

  );
}

export default App
