import React, {useState} from 'react';
import Header from '../components/Layout/Header';
import './StartPage_1.css';
import ellips2 from '../images/header_Ellipse2.png';
import ellips1 from '../images/header_Ellipse.png';
import hand1 from '../images/header_천지창조1.png';
import hand2 from '../images/header_천지창조2.png';
import font from '../font/NotoSansKR-Regular.otf';

const StartPage_1 = () =>{
    const [rotateImages, setRotateImages] = useState(false);

    const handleClick=()=>{
        setRotateImages(!rotateImages);
    };


    return(<div className='container'>
     <Header/>
    <div className ="image-container">
        <img className={`image ${rotateImages ? 'rotate' : ''} hand1`} src={hand1}/>
        <img className={`image ${rotateImages ? 'rotate' : ''} hand2`} src={hand2}/>   
        <img className={`image ${rotateImages ? 'rotate' : ''} eclips2`} src={ellips2}/>
    </div>
     <img className="eclips1" src={ellips1}/>
     <p className="touchButton" onClick={handleClick}>화면을 터치해보세요</p>

     </div>
    )
}
export default StartPage_1