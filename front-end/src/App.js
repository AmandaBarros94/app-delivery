import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from './Pages/Login';
import Register from './Pages/Register';

function App() {
  return (
    <Switch>
      <Route path="/login" component={ Login } />
      <Route path="/register" component={ Register } />
      <Route exact path="/" render={ () => <Redirect to="/login" /> } />
    </Switch>
  );
}

export default App;
