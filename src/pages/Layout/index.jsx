import { useContext, useState } from 'react'
import { Logo } from '../../components/Logo'
import { css } from '@emotion/react'
import { Link, useLocation } from 'wouter'
import { PickBox } from '../../components/PickBox'
import { ScentSelectionStatus, UserPreference } from '../../App'

import bathRoomPreview from '../../assets/preview/bath-room-preview.jpg'
import bedRoomPreview from '../../assets/preview/bed-room-preview.jpg'
import kidsRoomPreview from '../../assets/preview/kids-room-preview.jpg'
import livingRoomPreview from '../../assets/preview/living-room-preview.jpg'
import officePreview from '../../assets/preview/office-preview.jpg'
import shoeClosetPreview from '../../assets/preview/shoe-closet-preview.jpg'
import calmPreview from '../../assets/pickbox/calm.jpg'
import coldPreview from '../../assets/pickbox/cold.jpg'
import lovelyPreview from '../../assets/pickbox/lovely.jpg'
import passionatePreview from '../../assets/pickbox/passionate.jpg'
import positivePreview from '../../assets/pickbox/positive.jpg'
import sensualPreview from '../../assets/pickbox/sensual.jpg'


import pearPreview from '../../assets/preview/pear-preview.jpg'
import basilPreview from '../../assets/preview/basil-preview.jpg'
import lavenderPreview from '../../assets/preview/lavender-preview.jpg'
import freesiaPreview from '../../assets/preview/freesia-preview.jpg'
import jasminPreview from '../../assets/preview/jasmin-preview.jpg'
import peonyPreview from '../../assets/preview/peony-preview.jpg'
import cedarwoodPreview from '../../assets/preview/cedarwood-preview.jpg'
import muskPreview from '../../assets/preview/musk-preview.jpg'
import vanillaPreview from '../../assets/preview/vanilla-preview.jpg'

//props로 각 페이지 별 베너의 폰트 컬러, downer 배너 표시 여부 결정 가능
export const Layout = (props) => {

  const [buttonColor, setButtonColor] = useState('rgba(255, 255, 255, 0.6)')
  const [userPreference, setUserPreference] = useContext(UserPreference) // TODO: Selection cancellation
  const [location] = useLocation()
  const { pos, setPos } = useContext(ScentSelectionStatus)
  const changeButtonColor = () => {
    setButtonColor('#ffffff')
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

      <Logo className="scentchoosingLogo"
        css={css`
                    width: 40%;
                    height: auto;

                    position: absolute;
                    top: 5%;
                    z-index:10;
                    `} />

      <div className="upperBanner"
        css={css`
                    display: flex;
                    flex-direction: row;
                    justify-content: space-around;

                    background-color: rgba(255,255,255,0.3);
                    height: 6%;
                    width: 100%;
                    position: absolute;
                    top: 15%;
                    z-index: 10;
                `}>

        <Link to='/placechoosing'>
          <button css={[buttonStyle, css`${location === '/placechoosing' ? 'color: white;' : ''}`]} onClick={changeButtonColor}>PLACE</button>
        </Link>
        <Link to='/keywordchoosing'>
          <button css={[buttonStyle, css`${location === '/keywordchoosing' ? 'color: white;' : ''}`]} onClick={changeButtonColor}>KEYWORD</button>
        </Link>
        <Link to='/scentchoosing'>
          <button css={[buttonStyle, css`${location === '/scentchoosing' ? 'color: white;' : ''}`]} onClick={changeButtonColor}>SCENT</button>

        </Link>
      </div>

      <div className="downBanner" css={downBanner} style={props.noDownBanner ? { display: 'none' } : {}}>
        <button css={[buttonStyle, css`${pos === 0 ? 'color: white;' : ''}`]} onClick={() => setPos(0)}>TOP</button>
        <button css={[buttonStyle, css`${pos === 1 ? 'color: white;' : ''}`]} onClick={() => setPos(1)}>MIDDLE</button>
        <button css={[buttonStyle, css`${pos === 2 ? 'color: white;' : ''}`]} onClick={() => setPos(2)}>BASE</button>
      </div>

      <main css={[css`
                            height: 55%;
                            width: 100%;
                            display: flex;
                            align-items: center;
                            justify-content: space-around;`, props.mainCSS]}>
        {props.children}
      </main>

      <hr css={css`
                align: center;
                color: rgba(255,255,255,0.7);
                width: 87%;
                position: absolute;
                top: 80%;
            `} />

      <div css={css`
                            position: absolute;
                            top: 83%;

                            display: flex;
                            flex-direction: row;
                            justify-content: space-around;
                            
                            width: 90%;
                            padding: 0 30px 0 30px;
                            `}>

        <PickBox className="place" target='place' img={nameToPreviewImage(userPreference.place)} />
        <PickBox className="keyword" target='keyword' img={nameToPreviewImage(userPreference.keyword)} />
        <PickBox className="top" target='top' img={nameToPreviewImage(userPreference.scent.top)} />
        <PickBox className="middle" target='middle' img={nameToPreviewImage(userPreference.scent.middle)} />
        <PickBox className="base" target='bottom' img={nameToPreviewImage(userPreference.scent.bottom)} />


      </div>
      <hr css={css`
                align: center;
                color: rgba(255,255,255,0.7);
                width: 87%;
                position: absolute;
                top: 93%;
            `} />

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
    case 'lovely':
      return lovelyPreview
    case 'positive':
      return positivePreview
    case 'cold':
      return coldPreview
    case 'calm':
      return calmPreview
    case 'passionate':
      return passionatePreview
    case 'sensual':
      return sensualPreview
    default:
      return // blank image?
  }
}