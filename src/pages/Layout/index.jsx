import { useState } from 'react'
import { Logo } from '../../components/Logo'
import { css } from '@emotion/react'
import { Link } from 'wouter'
import { PickBox } from '../../components/PickBox'
//props로 각 페이지 별 베너의 폰트 컬러, downer 배너 표시 여부 결정 가능
export const Layout= ( props ) =>{

  const [ buttonColor, setButtonColor ] = useState( '#808080' )
  const changeButtonColor = () => {
    setButtonColor( '#ffffff' )
  }


  const buttonStyle = css`
        margin: 0;
        font-size: 400%;
        background: none;
        border: none;
        font-family: coolvetica;
        padding: 0;
        letter-spacing:3px;
        color: ${buttonColor};
    `

  const downBanner = css`
        display: flex;
        flex-direction: row;
        justify-content: space-around;

        background-color: rgba(255,255,255,0.7);
        height: 6%;
        width: 100%;
        position: absolute; 
        top: 21%;
        display: ${props.downBanner};
    `


  return (

    <div css={css`
        width: 100%;
        height: 100%;
      
        background-color: black;
        
        display: flex;
        align-items: center;
        justify-content: space-around;
        z-index: -1;
      `} className={props.className}>

      <Logo className= "scentchoosingLogo"
        css = {css`
                    width: 40%;
                    height: auto;

                    position: absolute;
                    top: 5%;
                    `}/>

      <div className= "upperBanner"
        css = {css`
                    display: flex;
                    flex-direction: row;
                    justify-content: space-around;

                    background-color: rgba(255,255,255,0.3);
                    height: 6%;
                    width: 100%;
                    position: absolute;
                    top: 15%;
                `}>

        <Link to ='/placechoosing'>
          <button css={buttonStyle} onClick ={changeButtonColor}>PLACE</button>
        </Link>
        <Link to ='/keywordchoosing'>
          <button css={buttonStyle} onClick = {changeButtonColor}>KEYWORD</button>
        </Link>
        <Link to ='/scentchoosing'>
          <button css={buttonStyle} onClick = {changeButtonColor}>SCENT</button>
        </Link>
      </div>

      <div className="downBanner" css = {downBanner} style={props.noDownBanner ? { display: 'none' } : {}}>
        <Link to ='/scentTop'>
          <button css={buttonStyle}>TOP</button>
        </Link>
        <Link to ='/scentMiddle'>
          <button css={buttonStyle}>MIDDLE</button>
        </Link>
        <Link to ='/scentBase'>
          <button css={buttonStyle}>BASE</button>
        </Link>
      </div>

      <main css = {css`
                            height: 55%;
                            width: 100%;
                            display: flex;
                            align-items: center;
                            justify-content: space-around;`}>
        {props.children}
      </main>

      <hr css = {css`
                align: center;
                color: rgba(255,255,255,0.7);
                width: 87%;
                position: absolute;
                top: 80%;
            `}/>

      <div css = {css`
                            position: absolute;
                            top: 83%;

                            display: flex;
                            flex-direction: row;
                            justify-content: space-around;
                            
                            width: 90%;
                            padding: 0 30px 0 30px;
                            `}>

        <PickBox className="place" img =""/>
        <PickBox className="keyword" img =""/>
        <PickBox className="top" img =""/>
        <PickBox className="middle" img =""/>
        <PickBox className="base" img =""/>

      </div>
      <hr css = {css`
                align: center;
                color: rgba(255,255,255,0.7);
                width: 87%;
                position: absolute;
                top: 93%;
            `}/>

    </div>
  )
}
