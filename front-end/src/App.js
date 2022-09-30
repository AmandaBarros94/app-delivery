import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import AppProvider from './context/AppProvider';
import CustomerTable from './Pages/CustomerCheckout/customerCheckoutPage';
import Login from './Pages/Login';
import Register from './Pages/Register';

function App() {
  return (
    <AppProvider>
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
