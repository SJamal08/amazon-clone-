import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/header/Header';
import Home from './components/home/Home';
import Checkout from './components/checkout/Checkout';

function App() {
  return (
    <Router>
        <Switch>
          <Route path="/checkout">
              <Header/>
              <Checkout/>
          </Route>
          <Route path="/login">
              <h1>Login </h1>
          </Route>
          <Route path="/">
              <Header/>
              <Home/>
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
