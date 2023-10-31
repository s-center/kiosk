import { css } from '@emotion/react'
import buttonImg from '../../assets/a.png'
export const NextPageButton = ({ reversed, onClick }) =>{
  const buttonStyle = css`
    width: 3%;
    height: auto;
    position: absolute;
    left: 95%;
    top: 54.5%;
    `

  return(
    <img
      onClick={onClick}
      css={[
        buttonStyle,
        css`transform: rotate(${reversed ? 180 : 0}deg); ${reversed ? 'right: 95%; left: auto; ' : ''}`
      ]}
      src={ buttonImg }
      alt='버튼'
    />
  )
}