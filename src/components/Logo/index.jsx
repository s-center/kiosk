import logo from '../../assets/logo.svg'
import { Link } from 'wouter'
export const Logo = ({ className }) => (
  <Link to ='/placechoosing'>
  <img className={className} src={logo} alt='Heavenly cocktail logo'/>
  </Link>
)