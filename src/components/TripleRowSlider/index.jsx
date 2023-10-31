import { Children, createContext, useContext, useState } from 'react'
import { css } from '@emotion/react'
import { NextPageButton } from '../Button/nextPageButton.jsx';

const TripleRowSliderContext = createContext({
  onSelect: () => {}
})

const SlideIndexIndicator = ({ index, length }) => (
  <div css={css`display: flex; justify-content: center;`}>
    {
      Array.from({ length }, (_, i) =>
        <span key={i} css={css`font-size: 60px; color: ${i === index ? 'white' : 'grey'}`}>.</span>)
    }
  </div>
)

export const TripleRowSlider = ({ onSelect, className, children: groups }) => {
  const [currentGroupIndex, setCurrentGroupIndex] = useState(0)

  return (
    <div className={className}>
      <SlideIndexIndicator
        css={css`
          margin-top: 1%; 
          margin-bottom: 20%;
        `}
        index={currentGroupIndex}
        length={Children.count(groups)}
      />
      <TripleRowSliderContext.Provider value={{ onSelect }}>
        {groups[currentGroupIndex]}
      </TripleRowSliderContext.Provider>
      <NextPageButton onClick={() => setCurrentGroupIndex(i => i + 1 < Children.count(groups) ? i + 1 : 0)} />
      <NextPageButton reversed onClick={() => setCurrentGroupIndex(i => i - 1 >= 0 ? i - 1 : Children.count(groups) - 1)} />
    </div>
  )
}

export const Group = ({ className, children: rows }) => (
  <div css={css`display: flex; flex-direction: column; margin-top: 10%;`} className={className}>
    {rows}
  </div>
)

export const Row = ({ id, image, className }) => {
  const { onSelect } = useContext(TripleRowSliderContext)

  return <img css={css`width: 100%; height: 32%; margin-bottom: -5%;`} src={image} onClick={() => onSelect(id)} className={className} />
}