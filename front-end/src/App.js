import React from 'react';

import Router from './Router';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router />
    </div>

import AppProvider from './context/AppProvider';
import { Switch, Route, Redirect } from 'react-router-dom';
import AppProvider from './context/AppProvider';
import CustomerTable from './Pages/CustomerCheckout/customerCheckoutPage';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Customer from './Pages/Products';

function App() {
  return (
    <AppProvider>
      <Route path="/login" component={ Login } />
      <Route path="/register" component={ Register } />
      <Route path="/customer/products" component={ Customer } />
      <Route exact path="/" render={ () => <Redirect to="/login" /> } />
    </AppProvider>
      <Switch>
        <Route path="/login" component={ Login } />
        <Route path="/register" component={ Register } />
        <Route path="/customer/checkout" component={ CustomerTable } />
        <Route exact path="/" render={ () => <Redirect to="/login" /> } />
      </Switch>
    </AppProvider>


  );
}

export default App;
