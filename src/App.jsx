import { Redirect, Route, Switch } from 'wouter'
import { Starting } from './pages/Starting'
import { Choosing } from './pages/Choosing'
export const App = () => (
  <Switch>
    <Route exact path='/starting'> <Starting /> </Route>
    <Route path='/choosing'><Choosing /></Route>
    <Route><Redirect to='/starting' /> {/** Or should we redirect to 404 page? */}</Route>
    
  </Switch>
)
