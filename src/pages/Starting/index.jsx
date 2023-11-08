import { useState } from 'react'
import { navigate } from 'wouter/use-location'
import { css } from '@emotion/react'
import styled from '@emotion/styled'

import { Logo } from '../../components/Logo'

import geryCircle from '../../assets/grey-circle.png'
import blackCircle from '../../assets/black-circle.png'
import handUp from '../../assets/hand-up.png'
import handDown from '../../assets/hand-down.png'

const Background = styled.div`
  width: 100%;
  height: 100%;

  background-color: black;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`

export const Starting = () => {

  const [isTouched, setTouchStatus] = useState(false)



  const reaction = transformation => css`
      transform: ${transformation};
      transition: 1s;
    `

  return (
    <Background id="background" onClick={() => setTouchStatus(true)} onTransitionEnd={() => isTouched && navigate('/choosing')}>

      <Logo
        css={css`
          width: 77%;
          height: 9%;
          
          z-index: 1;
          
          transform: translateX(-3%);
        `}
      />
      <div
        css={css`
          width: 100%;
          height: 54%;
          
          ${isTouched && reaction('rotate(180deg)')}
        `}
      >
        <img
          css={css`
            width: 100%; height: 100%;
          `}
          src={geryCircle}
          alt='Grey circle'
        />
        <img
          css={css`
            width: 90%;
            height: 90%;
            
            position: relative;
            top: -50%;
            left: 50%;
            transform: translate(-50%, -50%);
          `}
          src={blackCircle}
          alt='Black circle'
        />
      </div>
      <img
        css={css`
          object-fit: contain;
          width: 100%;
          height: 70%;
          
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-65%, -50%);
          
          ${isTouched && reaction('translate(-85%, -85%) rotate(115deg)')}
        `}
        src={handUp}
        alt='Right arm of human'
      />
      <img
        css={css`
          object-fit: contain;
          width: 86%;
          height: 58%;
          
          position: absolute;
          top: 68%;
          left: 50%;
          transform: translate(-17%, -50%);
          
          ${isTouched && reaction('translate(-13%, -55%) rotate(90deg)')}
        `}
        src={handDown}
        alt='Left arm of human'
      />

      <p css={css`
      font-weight: bold; 
      font-size: 32px; 
      color: white;

      `}>화면을 터치해보세요</p>

    </Background>
  )
}
