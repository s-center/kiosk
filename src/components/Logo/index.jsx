import logo from '../../assets/logo.svg'
import { Link } from 'wouter'
import { useContext } from 'react'
import { UserPreference } from '../../App'
export const Logo = ({ className }) => {
  const [, setUserPreference] = useContext(UserPreference)

  return (
    <Link onClick={() => setUserPreference({
      place: null,
      keyword: null,
      scent: {
        top: null,
        middle: null,
        bottom: null
      }
    })} to='/'>
      <img className={className} src={logo} alt='Heavenly cocktail logo'/>
    </Link>
  )
}