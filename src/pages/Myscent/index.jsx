import { Logo } from '../../components/Logo/index'
import { css } from '@emotion/react'
import { Button } from '../../components/Button/index'
import Freesia from '../../assets/backgroundImg/freesia.png'
import Jasmin from '../../assets/backgroundImg/jasmin.png'
import Peony from '../../assets/backgroundImg/peony.png'
import Bottle from '../../assets/bottle/Bottle.png'

export const Myscent = ( props ) => {
    
  let BackgroundImg =''
  if (props.base === 'freesia'){
    BackgroundImg = Freesia
  }
  else if (props.base === 'jasmin'){
    BackgroundImg = Jasmin
  } 
  else{
    BackgroundImg = Peony
  }

  return(

    <div css = {css`
                display: flex;
                flex-direction : column;
                justify-contents: center;
                align-items: center;`}>

      <img  css = {css`
                    height: 100%; 
                    width: auto;`}
      src = { BackgroundImg } 
      alt = "배경이미지"></img>

      <Logo className = "myscentLogo" 
        css = {css`
                    position: absolute; 
                    top: 10%; 
                    width: 60%;`}/>

      <img css = {css`
                    position: absolute;
                    top: 35%;`}
      src = { Bottle } alt = "bottle"></img>
                
      <section css = {css`
                position: absolute;
                top: 87%;`}>
        <Button to ='' 
          buttonText = "커스텀 디퓨저 저장하기" 
          className = {css`
                        background-color: white; 
                        margin: 0 0 5% 3%;
                    `}
          linkStyle = {css`
                        color: black;
                        `}/>

        <Button to ='' 
          buttonText = "시제품 추천받기"
          className = {css`
                        background-color: white; 
                    `}
          linkStyle = {css`
                        color: black;
                        `}/>

      </section>

    </div>

  )

}