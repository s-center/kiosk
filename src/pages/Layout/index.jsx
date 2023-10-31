import { useContext, useState } from 'react'
import { Logo } from '../../components/Logo'
import { css } from '@emotion/react'
import { Link, useLocation } from 'wouter'
import { PickBox } from '../../components/PickBox'
import { ScentSelectionStatus, UserPreference } from '../../App'

import bathRoomPreview from '../../assets/bath-room-preview.png'
import bedRoomPreview from '../../assets/bed-room-preview.png'
import kidsRoomPreview from '../../assets/kids-room-preview.png'
import livingRoomPreview from '../../assets/living-room-preview.png'
import officePreview from '../../assets/office-preview.png'
import shoeClosetPreview from '../../assets/shoe-closet-preview.png'

import pearPreview from '../../assets/pear-preview.png'
import basilPreview from '../../assets/basil-preview.png'
import lavenderPreview from '../../assets/lavender-preview.png'
import freesiaPreview from '../../assets/freesia-preview.png'
import jasminPreview from '../../assets/jasmin-preview.png'
import peonyPreview from '../../assets/peony-preview.png'
import cedarwoodPreview from '../../assets/cedarwood-preview.png'
import muskPreview from '../../assets/musk-preview.png'
import vanillaPreview from '../../assets/vanilla-preview.png'

//props로 각 페이지 별 베너의 폰트 컬러, downer 배너 표시 여부 결정 가능
export const Layout= ( props ) =>{

  const [ buttonColor, setButtonColor ] = useState( '#808080' )
  const [userPreference, setUserPreference] = useContext(UserPreference) // TODO: Selection cancellation
  const [location] = useLocation()
  const { pos } = useContext(ScentSelectionStatus)
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
          <button css={[buttonStyle, css`${location === '/placechoosing' ? 'color: white;' : ''}`]} onClick ={changeButtonColor}>PLACE</button>
        </Link>
        <Link to ='/keywordchoosing'>
          <button css={[buttonStyle, css`${location === '/keywordchoosing' ? 'color: white;' : ''}`]} onClick = {changeButtonColor}>KEYWORD</button>
        </Link>
        <Link to ='/scentchoosing'>
          <button css={[buttonStyle, css`${location === '/scentchoosing' ? 'color: white;' : ''}`]} onClick = {changeButtonColor}>SCENT</button>

        </Link>
      </div>

      <div className="downBanner" css = {downBanner} style={props.noDownBanner ? { display: 'none' } : {}}>
        <Link to ='/scentTop'>
          <button css={[buttonStyle, css`${pos === 0 ? 'color: white;' : ''}`]}>TOP</button>
        </Link>
        <Link to ='/scentMiddle'>
          <button css={[buttonStyle, css`${pos === 1 ? 'color: white;' : ''}`]}>MIDDLE</button>
        </Link>
        <Link to ='/scentBase'>
          <button css={[buttonStyle, css`${pos === 2 ? 'color: white;' : ''}`]}>BASE</button>
        </Link>
      </div>

      <main css = {[css`
                            height: 55%;
                            width: 100%;
                            display: flex;
                            align-items: center;
                            justify-content: space-around;`, props.mainCSS]}>
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

        <PickBox className="place" img={nameToPreviewImage(userPreference.place)}/>
        <PickBox className="keyword" img ={nameToPreviewImage(userPreference.keyword)}/>
        <PickBox className="top" img ={nameToPreviewImage(userPreference.scent.top)}/>
        <PickBox className="middle" img ={nameToPreviewImage(userPreference.scent.middle)}/>
        <PickBox className="base" img ={nameToPreviewImage(userPreference.scent.bottom)}/>

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


function nameToPreviewImage(name) {
  switch (name) {
  case 'bath-room':
    return bathRoomPreview
  case 'bed-room':
    return bedRoomPreview
  case 'kids-room':
    return kidsRoomPreview
  case 'living-room':
    return livingRoomPreview
  case 'office':
    return officePreview
  case 'shoe-closet':
    return shoeClosetPreview
  case 'pear':
    return pearPreview
  case 'basil':
    return basilPreview
  case 'lavender':
    return lavenderPreview
  case 'freesia':
    return freesiaPreview
  case 'jasmin':
    return jasminPreview
  case 'peony':
    return peonyPreview
  case 'cedarwood':
    return cedarwoodPreview
  case 'musk':
    return muskPreview
  case 'vanilla':
    return vanillaPreview
  default:
    return '' // blank image?
  }
}