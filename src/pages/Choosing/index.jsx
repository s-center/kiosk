import { css } from '@emotion/react'
import { Button } from '../../components/Button'
import { Logo } from '../../components/Logo'
import Waterdrop from '../../assets/waterdrop.mp4'
import { useEffect, useRef } from 'react'

export const Choosing = () => {
  const videoEl = useRef(null)

  useEffect(() => {
    if (videoEl.current)
      videoEl.current.playbackRate = 0.7
  }, [])

  return (
    <div
      css={css`
        width: 100%;
        height: 100%;
      
        background-color: black;
        
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        z-index:-1;
      `}>
      <video
        src={Waterdrop}
        alt='물방울'
        css={css`z-index: 1; width: 100%; height: 100%; position: fixed; top: -16%; left:0; `}
        autoPlay
        loop
        ref={videoEl}
      />

      <div
        css={css`
          width: 1748.227px;
          height: 300px;
          flex-shrink: 0;
          display : flex;
          justify-content: center;
          align-items: center;
          flex-direction : column;
        `}>

        <Logo
          css={css`
            width: 25%;
            height: auto;
            z-index:9;
            margin-bottom:10%;
            margin-top:5%;
          `} />

        <p
          css={css`
            color: #FFF;
            font-size: 37px;
            font-style: normal;
            line-height: 53.273%;
            letter-spacing: -3.255px;
            text-transform: uppercase;
            z-index:9;
            font-family:Baskerville;
            margin-bottom:4%; 
           
            `}>
          You are </p>
        <p
          css={css`
            color: #FFF;
            font-size: 100px;
            font-style: normal;
            line-height: 45.339px;
            text-transform: uppercase;
            z-index:9;
            font-family:Baskerville; 
            font-weight: 100;
          `}> Michelangelo </p>
      </div>

      <div
        css={css`
          position: relative;
          top:3%;
          color: #FFF;
          text-align: center;
          font-size: 37px;
          font-style: normal;
          font-weight: 100;
          line-height: 87px;
          text-transform: uppercase;
          z-index:9;
          font-family: NotoSansKR-Regular;
        `}>

        <p>
          당신이 머무는 공간에는 무슨 색의 향이 흐르나요
        </p>

        <p>
          질문지를 통해서 당신이 마음껏 취할 수 있는
        </p>

        <p>
          천국의 향을 조향해 보세요
        </p>

      </div>

      <div

        css={css`
          position: relative;
          z-index:9;
         `}>

        <Button buttonText='디퓨저 조향 시작하기' to='/guiding' className="steerStartButton" />
        <Button buttonText='제품 추천 받기' to='/recommand' className="recommedButton" />


      </div>
    </div>
  )
}
