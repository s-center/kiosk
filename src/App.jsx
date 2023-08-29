import { Redirect, Route, Switch } from 'wouter';
import { Starting } from './pages/Starting.jsx';

export const App = () => (
  <Switch>
    <Route path='/starting'> <Starting /> </Route>

    <Route><Redirect to='/starting' /> {/** Or should we redirect to 404 page? */}</Route>
  </Switch>
)
