import React, {useState} from 'react';
import './StartPage_2.css';
import font from '../font/NotoSansKR-Regular.otf';
<<<<<<< HEAD
const StartPage_2 = ()=>{
    return(
        <div className="background">
            <div className='wrapper'>
                <div className="box">
                </div>  
            </div>
            <p className='words'>당신이 머무는 공간에서는</p>
            <p className='words'>무슨 색의 향이 흐르나요</p>
            <p className='words'>질문지를 통해서 당신이 마음껏</p>
            <p className="words">취할 수 있는 천국의 향을  조향해 보세요</p>
        </div>


    )
}

export default StartPage_2
=======
import header from '../images/headerImage.png';
import {Link} from 'react-router-dom';
const StartPage_2=()=>{
    return(
        <div>
            <img className="headerIMG" src={header}/>
            <p className="littlewords">YOU ARE</p>
            <p className="bigwords">MICHELANGELO</p>
            <p className='lowerwords'>
            당신이 머무는 공간에서는 어떤 색의 향이 흐르나요<br/>
            디퓨저 조향 질문지를 통해서 당신이<br/>
            마음껏 취할 수 있는 천국의 향을 만들어 보세요</p>
            <button className="start">
                <Link to="/other">조향 시작하기</Link>
                <Link to="/other">추천받기</Link>
            </button>


        </div>
    )
}

export default StartPage_2;
>>>>>>> f7e46cdfee1eda0c40ebd53ba2ba05a9da50060d
