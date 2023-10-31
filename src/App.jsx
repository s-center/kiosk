import { Redirect, Route, Switch } from 'wouter'
import { Starting } from './pages/Starting'
import { Choosing } from './pages/Choosing'
import { Myscent } from './pages/Myscent'
import { scentChoosing } from './pages/Scentchoosing'
import { PlaceChoosing } from './pages/PlaceChoosing'
import { KeywordChoosing } from './pages/KeywordChoosing'


export const App = () => (
  <Switch>
    <Route exact path='/starting' component={Starting} />
    <Route path='/choosing' component={Choosing} />
    <Route path="/myscent"> <Myscent base="freesia" /></Route> {/* 예시 props. 나중에는 자동으로 받아서 될 것 */}
    <Route path='/scentchoosing' component={scentChoosing} />
    <Route path='/placechoosing' component={PlaceChoosing} />
    <Route paht='/keywordchoosing_lovely' component={KeywordChoosing} />
    <Route><Redirect to='/starting' /> {/** Or should we redirect to 404 page? */}</Route>
  </Switch>
)
