import { Redirect, Route, Switch } from 'react-router-dom';
import { Login, Register } from '../pages';

export default function LoginRoutes() {
  return (
    <Switch>
      <Route path="/login" component={ Login } />
      <Route path="/register" component={ Register } />
      <Route exact path="/" render={ () => <Redirect to="/login" /> } />
    </Switch>
  );
}
