import { useContext, useState } from 'react'
import { css } from '@emotion/react'

import greyDefaultBackground from '../../assets/grey-default-background.png'
import { UserPreference } from '../../App.jsx'

export const PickBox = ( props ) => {
  const [imageOpacity, setImageOpacity] = useState(1)
  const [showX, setShowX] = useState(false)
  const [userPreference, setUserPreference] = useContext(UserPreference)

  const handleDivClick = () => {
    setImageOpacity(imageOpacity === 1 ? 0 : 1)
    setShowX(!showX)
  }

  const handleInnerDivClick = (e) => {
    e.stopPropagation()
    setShowX(false)

    if (showX) {
      if (props.target === 'place' || props.target === 'keyword') {
        setUserPreference({
          ...userPreference,
          ...{ [props.target]: null }
        })
      } else {
        setUserPreference({
          ...userPreference,
          scent: { ...userPreference.scent, [props.target]: null },
        })
      }
    }
  }

  return (
    <div className={props.className}
      css={css`
                        background-color: rgba(255,255,255,0.5);
                        width: 140px;
                        height: 140px;
                        position: relative;
                        margin: 0;`}

      onClick={handleDivClick}>

      <img src={props.img ?? greyDefaultBackground}
        css={css`
                                    opacity : imageOpacity;
                                    display: showX ? 'none' : 'block';
                                    width: 100%;
                                    height: 100%;
                                    `} />
      {showX && (<div
        css={css`
                                background-color: rgba(0,0,0,0.5);
                                width: 140px;
                                height: 140px;
                                
                                position: relative;
                                top: -100%;

                                margin: 0;
                                color: white;

                                display: flex; 
                                align-items: center;
                                justify-content: space-around;
                                `}

        onClick={handleInnerDivClick}>


        <p css={css`
                                                font-size: 100px;
                                                font-family: xx;
                                                position: relative; 
                                                top:0%;
                                                `}>X</p>
      </div>)}

    </div>
  )
}