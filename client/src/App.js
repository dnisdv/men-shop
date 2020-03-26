import React from 'react';
import './App.css';
import Header from './components/Header/Header'
import MainPage from './Pages/MainPage/MainPage'
import Footer from './components/Footer/Footer'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
          <Header />
          <Switch>
            <Route path="/" component={MainPage}  />
          </Switch>
          <Footer />
      </div>
    </Router>
  );
}

export default App;
