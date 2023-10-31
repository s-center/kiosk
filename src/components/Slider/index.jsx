import { Children, cloneElement, useState, useRef } from 'react'
import { css } from '@emotion/react'

// Children must be non-empty list of React elements created by Slide component.
export const Slider = ({ onSelect, className, children: slides }) => {
  const [visibleEntry, setVisibleEntry] = useState(slides.slice(0, 4))

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
      {
        Children.map(
          visibleEntry,
          (child, index) =>
            cloneElement(child, {
              onSelect,
              onDiscard: () => {
                const candidate = slides.filter(({ props: { id }}) => visibleEntry.every(({ props: { id: idOfAlreadyVisibleSlide }}) => id !== idOfAlreadyVisibleSlide))[0]

                setVisibleEntry(visibleEntry.slice(1).concat([candidate ?? visibleEntry[0]]))
              },
              isFocused: index === 0
            })
        )
      }
    </div>
  )
}

const bounce = [
  { transform: 'translate3d(-50%, -50%, 0px)', offset: 0.00 },
  { transform: 'translate3d(-50%, -50%, 0px)', offset: 0.20 },
  { transform: 'translate3d(-50%, -50%, 30px)', offset: 0.40 },
  { transform: 'translate3d(-50%, -50%, 30px)', offset: 0.43 },
  { transform: 'translate3d(-50%, -50%, 0px)', offset: 0.53 },
  { transform: 'translate3d(-50%, -50%, 15px)', offset: 0.70 },
  { transform: 'translate3d(-50%, -50%, 0px)', offset: 0.80 },
  { transform: 'translate3d(-50%, -50%, 4px)', offset: 0.90 },
  { transform: 'translate3d(-50%, -50%, 0px)', offset: 1.00 }
]

export const Slide = ({ id, onSelect, onDiscard, isFocused, className, children }) => {
  const slideElement = useRef(null)
  const [dragStartPoint, setDragStartPoint] = useState(null)
  const [draggedLength, setDraggedLength] = useState(0)

  return (
    <div
      ref={slideElement}
      onMouseDown={e => isFocused && setDragStartPoint(e.clientY)}
      onMouseMove={e => dragStartPoint && setDraggedLength(e.clientY - dragStartPoint) }
      onMouseUp={e => {
        if (!dragStartPoint) return

        const draggedLength = e.clientY - dragStartPoint

        if (isFocused && draggedLength < 30 && draggedLength > -30) {
          slideElement.current?.animate(bounce, { duration: 1000 })
          onSelect(id)
        }
        else if (isFocused && (draggedLength >= 30 || draggedLength <= -30)) {
          onDiscard(id)
        }

        setDragStartPoint(null)
        setDraggedLength(0)
      }}
      onMouseLeave={() => { setDragStartPoint(null); setDraggedLength(0) }}
      css={css`
        position: absolute;
        top: 50%;
        left: 50%;
        
        box-shadow: 0 0 50px rgb(0 0 0 / 50%);
      
        &:nth-child(1) {
          transform: translate3d(-50%, -50%, 0px) translateY(${draggedLength}px);
          z-index: 4;
        }
        
        &:nth-child(2) {
          transform: translate3d(-50%, -75%, -90px);
          z-index: 3;
          filter: blur(2px);
        }
        
        &:nth-child(3) {
          transform: translate3d(-50%, -100%, -180px);
          z-index: 2;
          filter: blur(3px);
        }
        
        &:nth-child(4) {
          transform: translate3d(-50%, -130%, -300px);
          z-index: 1;
          filter: blur(5px);
        }
      `}
      className={className}
    >
      {children}
    </div>
  )
}