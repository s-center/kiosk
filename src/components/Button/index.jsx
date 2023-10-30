import { Link } from 'wouter'
import { css } from '@emotion/react'

export const Button = ({ buttonText, to, className }) => {

  const buttonStyles = css`
    background-color: gray; 
    opacity: 1;
    display: flex;
    width: 648px;
    height: 132px;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    border-radius: 15px;
    margin:20px;
    font-size: 30px;
    border:none;
    `

  return (
    <button css={[ buttonStyles, className ]}>
      <Link to = { to } css ={ css`color: white; text-decoration: none; `}>{ buttonText }</Link>
    </button>
  )
}
