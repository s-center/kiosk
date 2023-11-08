import logo from '../../assets/logo.png'
import { Link } from 'wouter'
export const Logo = ({ className }) => (
  <Link to ='/'>
    <img className={className} src={logo} alt='Heavenly cocktail logo'/>
  </Link>
)