import { Route, Switch, Redirect } from 'react-router-dom';

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
