
import { Logo } from '../../components/Logo'
import { css } from '@emotion/react'

import Jeus from '../../assets/recommandItem/jeus.png'
import Icarus from '../../assets/recommandItem/icarus.png'
import Eros from '../../assets/recommandItem/eros.png'
import Athens from '../../assets/recommandItem/athens.png'
import Applo from '../../assets/recommandItem/applo.png'
import Aphrodite from '../../assets/recommandItem/aphrodite.png'

export const Recommand = () => {

  return (
    <div css={css` width :100%; height:100%; background-color: rgba(0,0,0,1);`}>
      <Logo css={css` width: 80%; position:absolute; top:5%; left: 8%;`} />
      <img src={Jeus} alt="제우스" />
      <img src={Eros} alt='에로스'/>
      <img src={Icarus} alt ='이카루스'/>
      <img src ={Aphrodite} alt='아프로디테'/>
      <img src ={Athens} alt ="아테네"/>
      <img src={Applo} alt ="아폴로"/>

    </div>
  )
} 