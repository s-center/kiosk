import { Logo } from '../../components/Logo/index'
import { css } from '@emotion/react'
import { Button } from '../../components/Button/index'
import Freesia from '../../assets/backgroundImg/freesia.png'
import Jasmin from '../../assets/backgroundImg/jasmin.png'
import Peony from '../../assets/backgroundImg/peony.png'

import { UserPreference } from '../../App'


import positive2 from '../../assets/bottle/positive2.png'
import lovely2 from '../../assets/bottle/lovely2.png'

export const Myscent = (props) => {

  let BackgroundImg = ''
  if (UserPreference.middle === 'freesia') {
    BackgroundImg = Freesia
  }
  else if (UserPreference.middle === 'jasmin') {
    BackgroundImg = Jasmin
  }
  else {
    BackgroundImg = Peony
  }

  let place = UserPreference.place
  let keyword = UserPreference.keyword
  let number = '1'

  if (place === 'office' || place === 'living-room') {
    number = '2'
  }
  else if (place === 'kids-room' || place === 'bed-room') {
    number = '1'
  }
  else { number = '3' }


  const bottle = `${keyword}${number}`
  console.log(bottle)
  let Bottle = { bottle }

  return (

    <div css={css`
                height: 100%;
                width: 100%;
                display: flex;
                flex-direction : column;
                justify-contents: center;
                align-items: center;`}>

      <img css={css`
                    height: 100%; 
                    width: auto;
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
                    top: 20%;
                    width:120%;`}
        src={Bottle} alt="bottle"></img>

      <section css={css`
                position: absolute;
                top: 75%;`}>
        <Button to=''
          buttonText="커스텀 디퓨저 저장하기"
          className={css`background-color: white; margin-bottom:5%;`}
          linkStyle={css`color: black;`} />

        <Button to=''
          buttonText="시제품 추천받기"
          className={css`background-color: white;`}
          linkStyle={css`color: black;`} />

      </section>

    </div>

  )

}