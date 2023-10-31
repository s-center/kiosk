import { Redirect, Route, Switch } from 'wouter'
import { Starting } from './pages/Starting'
import { Choosing } from './pages/Choosing'
import { ScentChoosing } from './pages/Scentchoosing'
import { Myscent } from './pages/Myscent'
export const App = () => (
  <Switch>
    <Route exact path='/starting' component={ Starting }/>
    <Route path='/choosing' component={ Choosing }/>
    <Route path ='/scentchoosing' component={ ScentChoosing }/>
    <Route path="/myscent"> <Myscent base="freesia"/></Route> {/* 예시 props. 나중에는 자동으로 받아서 될 것 */}
    <Route><Redirect to='/starting' /> {/** Or should we redirect to 404 page? */}</Route>
  </Switch>
)
