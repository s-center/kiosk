import StartPage_1 from './pages/StartPage_1.jsx';
import{Route, Routes} from 'react-router-dom';
import StartPage_2 from './pages/StartPage_2.jsx';

function App() {

  return (<div>
    
    <Routes>
      <Route exact path='/' element={<StartPage_1/>}/>
      <Route path='/start&recommand' element={<StartPage_2/>}/>
    </Routes>
    
    </div>
  )
}

export default App
