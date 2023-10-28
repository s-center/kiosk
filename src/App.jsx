import { Redirect, Route, Switch } from 'wouter'
import { Starting } from './pages/Starting'
import { Choosing } from './pages/Choosing'
import { scentChoosing } from './pages/Scentchoosing'

export const App = () => (
  <Switch>
    <Route exact path='/starting' component={ Starting }/>
    <Route path='/choosing' component={ Choosing }/>
    <Route path ='/scentchoosing' component={ scentChoosing }/>
    <Route><Redirect to='/starting' /> {/** Or should we redirect to 404 page? */}</Route>
    
  </Switch>
)
