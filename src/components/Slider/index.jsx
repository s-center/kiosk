import { Children, cloneElement, useState } from 'react'
import { css, keyframes } from '@emotion/react'

// Children must be non-empty list of React elements created by Slide component.
export const Slider = ({ onSelect, className, children }) => {
  const [focused, setFocus] = useState(children[0])

  // four thing at a time, the last one must be blurred.
  return (
    <div
      css={css`
        position: relative;
        
        perspective: 400px;
        transform-style: preserved-3d;
      `}
      className={className}
    >
      {Children.map(children, child => cloneElement(child, { onSelect, isFocused: child === focused }))}
    </div>
  )
}

const bounce = keyframes`
  from, 20%, 53%, 80%, to {
    transform: translate3d(-50%, -50%, 0px);
  }

  40%, 43% {
    transform: translate3d(-50%, -50%, 30px);
  }

  70% {
    transform: translate3d(-50%, -50%, 15px);
  }

  90% {
    transform: translate3d(-50%, -50%, 4px);
  }
`

export const Slide = ({ id, onSelect, isFocused, className, children }) => {
  const [isClicked, setIsClicked] = useState(false)

  return (
    <div
      onClick={() => { setIsClicked(!isClicked); onSelect(id) }}
      css={css`
        position: absolute;
        top: 50%;
        left: 50%;
        
        box-shadow: 0 0 50px rgb(0 0 0 / 50%);
      
        &:nth-child(1) {
          transform: translate3d(-50%, -50%, 0px);
          z-index: 3;
        }
        
        &:nth-child(2) {
          transform: translate3d(-50%, -75%, -90px);
          z-index: 2;
        }
        
        &:nth-child(3) {
          transform: translate3d(-50%, -100%, -180px);
          z-index: 1;
        }
        
        &[data-is-focused="true"][data-is-clicked="true"] {
          animation: ${bounce} 1s;
        }
      `}
      className={className}
      data-is-focused={isFocused}
      data-is-clicked={isClicked}
      onAnimationEnd={() => setIsClicked(false)}
    >
      {children}
    </div>
  )
}