
import { Logo } from '../../components/Logo'
import { css } from '@emotion/react'
import { Link } from 'wouter'
import './recommand.css'
import Jeus from '../../assets/recommandItem/jeus.png'
import Icarus from '../../assets/recommandItem/icarus.png'
import Eros from '../../assets/recommandItem/eros.png'
import Athens from '../../assets/recommandItem/athens.png'
import Applo from '../../assets/recommandItem/applo.png'
import Aphrodite from '../../assets/recommandItem/aphrodite.png'

export const Recommand = () => {

    return (
        <div css={css` width :100%; height:100%; background-color: rgba(0,0,0,1);`}>
            <Logo css={css` width: 80%; position:absolute; top:5%; left: 8%; z-index: 9;`} />
            <Link to='/buyProduct'>
                <img src={Jeus} alt="제우스" className="jeus" />
            </Link>
            <Link to='/buyProduct'>
                <img src={Eros} alt='에로스' className="eros" />
            </Link>
            <Link to='/buyProduct'>
                <img src={Icarus} alt='이카루스' className="icarus" />
            </Link>
            <Link to='/buyProduct'>
                <img src={Aphrodite} alt='아프로디테' className="aphrodite" />
            </Link>
            <Link to='/buyProduct'>
                <img src={Athens} alt="아테네" className="athens" />
            </Link>
            <Link to='/buyProduct'>
                <img src={Applo} alt="아폴로" className="Applo" />
            </Link>
            <p css={css`color:rgb(255,255,255); 
                        position: relative; 
                        top :90%; 
                        left: 35%; 
                        font-size: 200%; 
                        text-shadow: 5px 5px 20px rgb(255,255,255);
                        z-index:9;
                        `}>이미지를 터치해보세요</p>

        </div>
    )
} 
