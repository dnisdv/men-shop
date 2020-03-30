import React,{ useState, useContext } from 'react';
import './App.css';
import Header from './components/Header/Header'
import MainPage from './Pages/MainPage/MainPage'
import Footer from './components/Footer/Footer'
import CustomMouse from './HOC/customMouse/customMouse'
import ProductsPage from './Pages/ProductsPage/ProductsPage';

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
  const theme = useContext(ThemeContext)

  return (
    
    <Router>
      <ThemeContext.Provider value={themeHandler}>
        <div style={{ backgroundColor: themeHandler.background }} className="App">
            <Header />
            <Switch>
              <Route path="/Products" componetn={ProductsPage} />
              <Route exact path="/" render={() => <MainPage changeTheme={toggleTheme} />}  />
            </Switch>
            <Footer />
        </div>
      </ThemeContext.Provider>
    </Router>

  );
}

export default CustomMouse(App)
