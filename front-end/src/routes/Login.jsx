import { Redirect, Route, Switch } from 'react-router-dom';
import { Login, Register } from '../pages';

export default function LoginRoutes() {
  return (
    <Switch>
      <Route path="/login" element={ Login } />
      <Route path="/register" element={ Register } />
      <Route exact path="/" element={ <Redirect to="/login" /> } />
    </Switch>
  );
}
