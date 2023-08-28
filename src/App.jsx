import StartPage_1 from './pages/StartPage_1.jsx';
<<<<<<< HEAD
import{Route, Routes} from 'react-router-dom';
import StartPage_2 from './pages/StartPage_2.jsx';

function App() {

  return (<div>
    
    <Routes>
      <Route exact path='/' element={<StartPage_1/>}/>
      <Route path='/start&recommand' element={<StartPage_2/>}/>
    </Routes>
    
=======
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
>>>>>>> f7e46cdfee1eda0c40ebd53ba2ba05a9da50060d
    </div>
  )
}

export default App
