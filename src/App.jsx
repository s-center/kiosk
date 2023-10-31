import { Redirect, Route, Switch } from 'wouter'
import { Starting } from './pages/Starting'
import { Choosing } from './pages/Choosing'
import { Myscent } from './pages/Myscent'
import { ScentChoosing } from './pages/Scentchoosing'
import { PlaceChoosing } from './pages/PlaceChoosing'
import { createContext, useState } from 'react'

export const UserPreference = createContext([{
  place: null,
  keyword: null,
  scent: {
    top: null,
    middle: null,
    bottom: null
  }
}, () => {}])

export const App = () => {
  const [userPreference, setUserPreference] = useState({
    place: null,
    keyword: 'freesia',
    scent: {
      top: null,
      middle: null,
      bottom: null
    }
  })

  return (
    <UserPreference.Provider value={[userPreference, setUserPreference]}>
      <Switch>
        <Route exact path='/starting' component={ Starting } />
        <Route path='/choosing' component={ Choosing } />
        <Route path='/placechoosing' component={ PlaceChoosing } />
        <Route path ='/scentchoosing' component={ ScentChoosing }/>
        <Route path="/myscent"> <Myscent base={userPreference.scent.bottom}/> </Route> {/* 예시 props. 나중에는 자동으로 받아서 될 것 */}
        <Route><Redirect to='/starting' /> {/** Or should we redirect to 404 page? */}</Route>
      </Switch>
    </UserPreference.Provider>
  )
}