import { Link } from 'wouter'

export const Button = ({ buttonText, to, className }) => {
    
  const buttonSyles = css`
    background-color: '#000'; 
    opacity: 0.5;
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
      <button
        css = {[ buttonStyles, className ]}>
        <Link to = { to } css = { css`color:#FFF; text-decoration: none; `}>{ buttonText }</Link>
      </button>
  );
}
