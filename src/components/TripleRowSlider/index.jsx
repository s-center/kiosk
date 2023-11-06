import { Children, createContext, useContext } from 'react'
import { css } from '@emotion/react'
import { NextPageButton } from '../Button/nextPageButton'
import { ScentSelectionStatus } from '../../App'

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
  const { pos: currentGroupIndex, setPos: setCurrentGroupIndex } = useContext(ScentSelectionStatus)

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
      <NextPageButton
        onClick={() => {
          const nextIndex = currentGroupIndex + 1 < Children.count(groups) ? currentGroupIndex + 1 : 0

          setCurrentGroupIndex(nextIndex)
        }}
      />
      <NextPageButton
        reversed
        onClick={() => {
          const nextIndex = currentGroupIndex - 1 >= 0 ? currentGroupIndex - 1 : Children.count(groups) - 1

          setCurrentGroupIndex(nextIndex)
        }}
      />
    </div>
  )
}

const Grouped = createContext(null)

export const Group = ({ name, className, children: rows }) => (
  <Grouped.Provider value={name}>
    <div css={css`display: flex; flex-direction: column; margin-top: 10%;`} className={className}>
      {rows}
    </div>
  </Grouped.Provider>
)

export const Row = ({ id, image, className }) => {
  const { onSelect } = useContext(TripleRowSliderContext)
  const name = useContext(Grouped)

  return <img css={css`width: 100%; height: 32%; margin-bottom: -5%;`} src={image} onClick={() => onSelect(id, name)} className={className} />
}