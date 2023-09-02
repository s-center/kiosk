import { Redirect, Route, Switch } from 'wouter'
import { Starting } from './pages/Starting'

export const App = () => (
  <Switch>
    <Route path='/'> <Starting /> </Route>

    <Route><Redirect to='/' /> {/** Or should we redirect to 404 page? */} </Route>
  </Switch>
)
