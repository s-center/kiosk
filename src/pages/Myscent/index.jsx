import { Logo } from '../../components/Logo/index'
import { css } from '@emotion/react'
import { Button } from '../../components/Button/index'
import Freesia from '../../assets/backgroundImg/freesia.jpg'
import Jasmin from '../../assets/backgroundImg/jasmin.jpg'
import Peony from '../../assets/backgroundImg/peony.jpg'
import { useContext } from 'react'
import { UserPreference } from '../../App'

import positive2 from '../../assets/bottle/positive2.png'
import lovely2 from '../../assets/bottle/lovely2.png'
import cold2 from '../../assets/bottle/cold2.png'
import passionate2 from '../../assets/bottle/passionate2.png'
import calm2 from '../../assets/bottle/calm2.png'
import sensual2 from '../../assets/bottle/sensual2.png'

import positive1 from '../../assets/bottle/positive1.png'
import lovely1 from '../../assets/bottle/lovely1.png'
import cold1 from '../../assets/bottle/cold1.png'
import passionate1 from '../../assets/bottle/passionate1.png'
import calm1 from '../../assets/bottle/calm1.png'
import sensual1 from '../../assets/bottle/sensual1.png'


import positive3 from '../../assets/bottle/positive3.png'
import lovely3 from '../../assets/bottle/lovely3.png'
import cold3 from '../../assets/bottle/cold3.png'
import passionate3 from '../../assets/bottle/passionate3.png'
import calm3 from '../../assets/bottle/calm3.png'
import sensual3 from '../../assets/bottle/sensual3.png'

export const Myscent = () => {

  const [{ place, keyword, scent }] = useContext(UserPreference)


  let BackgroundImg = ''
  if (scent.middle === 'freesia') {
    BackgroundImg = Freesia
  }
  else if (scent.middle === 'jasmin') {
    BackgroundImg = Jasmin
  }
  else {
    BackgroundImg = Peony
  }


  let col = 0
  let row = 0

  if (place === 'office' || place === 'living-room') {
    col = 1
  }
  else if (place === 'kids-room' || place === 'bed-room') {
    col = 0
  }
  else { col = 2 }

  const bottlechoose = [[lovely1, calm1, cold1, positive1, sensual1, passionate1],
    [lovely2, calm2, cold2, positive2, sensual2, passionate2],
    [lovely3, calm3, cold3, positive3, sensual3, passionate3]]

  if (keyword === 'lovely') {
    row = 0
  }
  else if (keyword === 'calm') {
    row = 1
  }
  else if (keyword === 'cold') {
    row = 2
  }
  else if (keyword === 'positive') {
    row = 3
  }
  else if (keyword === 'sensual') {
    row = 4
  }
  else if (keyword === 'passionate') {
    row = 5
  }
  const Bottle = bottlechoose[col][row]

  return (

    <div css={css`
                width: 100%;
                height: 100%;
                
                display: flex;
                flex-direction : column;
                justify-contents: center;
                align-items: center;`}>

      <img css={css`width: 100%;
                    height: auto;
                    object-fit: contain
                    `}
      src={BackgroundImg}
      alt="배경이미지"></img>

      <Logo className="myscentLogo"
        css={css`
                    position: absolute; 
                    top: 5%; 
                    width: 45%;`} />

      <img css={css`
                    position: absolute;
                    top: 15%;
                    height:55%;`}
      src={Bottle} alt={Bottle}></img>

      <section css={css`
                position: absolute;
                top: 75%;`}>
        <Button to='/qrwait'
          buttonText="커스텀 디퓨저 저장하기"
          className={css`background-color: white; margin-bottom:5%;`}
          linkStyle={css`color: black; letter-spacing:-3px;`} />

        <Button to='/recommand'
          buttonText="시제품 추천받기"
          className={css`background-color: white;letter-spacing:-3px;`}
          linkStyle={css`color: black;`} />

      </section>

    </div>

  )

}