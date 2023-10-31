
import { css } from '@emotion/react'
import buttonImg from '../../assets/a.png'
import { Link } from 'wouter'
export const NextPageButton = ({ to }) =>{
  const buttonStyle = css`
    width: 3%;
    height: auto;
    position: absolute;
    left: 92%;`

  return(
    <div>
      <Link to = { to }>
        <img css={ buttonStyle } src={ buttonImg } alt='버튼'/>
      </Link>
    </div>
  )
}