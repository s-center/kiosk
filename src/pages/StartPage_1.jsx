import React, {useState} from 'react';
import Header from '../components/Layout/Header';
import './StartPage_1.css';
import ellips2 from '../images/header_Ellipse2.png';
import ellips1 from '../images/header_Ellipse.png';
import hand1 from '../images/header_천지창조1.png';
import hand2 from '../images/header_천지창조2.png';
import font from '../font/NotoSansKR-Regular.otf';
import {Link, useNavigate} from 'react-router-dom';


const StartPage_1 = () =>{
    const [rotateImages, setRotateImages] = useState(false);
    const [isAnimationComplete, setIsAnimationComplete]=useState(false);
    const navigate=useNavigate();

    const handleClick=()=>{
        setRotateImages(!rotateImages);
        setIsAnimationComplete(false);
    };

    const handleAnimationEnd=()=>{
        navigate('/start&recomand');
    };
    


    return(<div className='container'>
     <Header/>
    <div className ="image-container">
        <img className={`image ${rotateImages ? 'rotate' : ''} hand1`} src={hand1} alt='돌아가는 손'/>
        <img className={`image ${rotateImages ? 'rotate' : ''} hand2`} src={hand2} alt="돌아가는 손"/>   
        <img className={`image ${rotateImages ? 'rotate' : ''} eclips2`} src={ellips2} alt="돌아가는 원" onAnimationEnd={handleAnimationEnd}/>
    </div>
     <img className="eclips1" src={ellips1}/>
     <Link to='/start&recommand' className="touchButton" onClick={handleClick}>화면을 터치해보세요</Link>

     </div>
    )
}

export default StartPage_1