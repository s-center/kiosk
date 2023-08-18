import StartPage_1 from './pages/StartPage_1.jsx';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import StartPage_2 from './pages/StartPage_2.jsx';
function App() {

  return (<div>
  <Router>
    <Link to="/"></Link>
    <Link to="/other"></Link>

    <Switch>
      <Route path="/other">
        <StartPage_2/>
      </Route>
      <Route path="/">
      </Route>
    </Switch>

  </Router>
    <StartPage_1/>
    </div>
  )
}

export default App
