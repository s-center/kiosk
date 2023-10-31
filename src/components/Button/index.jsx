import { Link } from 'wouter'
import { css } from '@emotion/react'
import '../../../src/font.css'

export const Button = ({ buttonText, to, className, linkStyle }) => {

  const buttonStyles = css`
    background-color: rgba(255,255,255,0.5); 
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
    font-family : NotoSansKR-Regular;
    `
    
  return (
    <button css={[ buttonStyles, className ]}>
      <Link to = { to } css ={ [css`color: white; text-decoration: none; `, linkStyle ]}>{ buttonText }</Link>
    </button>
  )
}
