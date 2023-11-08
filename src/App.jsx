import { Redirect, Route, Switch } from 'wouter'
import { Starting } from './pages/Starting'
import { Choosing } from './pages/Choosing'
import { Myscent } from './pages/Myscent'
import { ScentChoosing } from './pages/Scentchoosing'
import { PlaceChoosing } from './pages/PlaceChoosing'
import { KeywordChoosing } from './pages/KeywordChoosing'
import { Recommand } from './pages/Recommand'
import { Product } from './pages/Product'
import { QRcode } from './pages/QRcode'
import { createContext, useState } from 'react'

export const UserPreference = createContext([{
  place: null,
  keyword: null,
  scent: {
    top: null,
    middle: null,
    bottom: null
  }
}, () => { }])

export const ScentSelectionStatus = createContext({ pos: null, setPos: () => {} })

export const App = () => {
  const [userPreference, setUserPreference] = useState({
    place: null,
    keyword: null,
    scent: {
      top: null,
      middle: null,
      bottom: null
    }
  })
  const [pos, setPos] = useState(0)

  return (
    <UserPreference.Provider value={[userPreference, setUserPreference]}>
      <ScentSelectionStatus.Provider value={{ pos, setPos }}>
        <Switch>
          <Route exact path='/starting' component={Starting} />
          <Route path='/recommand' component={Recommand} />
          <Route path='/choosing' component={Choosing} />
          <Route path='/placechoosing' component={PlaceChoosing} />
          <Route path='/keywordchoosing' component={KeywordChoosing} />
          <Route path='/scentchoosing' component={ScentChoosing} />
          <Route path='/product/:product' component={Product} />
          <Route path="/myscent"> <Myscent middle={userPreference.scent.bottom} /></Route>
          <Route path='/qrcode' component ={ QRcode }></Route>

          <Route><Redirect to='/starting' /> {/** Or should we redirect to 404 page? */}</Route>
        </Switch>
      </ScentSelectionStatus.Provider>
    </UserPreference.Provider>
  )
}