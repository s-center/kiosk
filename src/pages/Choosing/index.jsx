import { css } from '@emotion/react'
import styled from '@emotion/styled'
import {Button} from '../../components/Button';
import { Logo } from '../../components/Logo'




export const Choosing = () =>{
return(
    <div 
     css={css`
    width: 100%;
    height: 100%;
  
    background-color: black;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  `}>
    
    <div 
        css={css`
        width: 1748.227px;
        height: 300px;
        flex-shrink: 0;
        position: relative;
        top:20%;
        align-items: center;
        `}>
            <p 
                css={css`
                color: #FFF;
                text-align: center;
                font-family: 'Libre Baskerville', serif;
                font-size: 27px;
                font-style: normal;
                line-height: 53.273% 
                letter-spacing: -4.255px;
                text-transform: uppercase;
               
                `}>
                You are
            </p>
            <p
                css={css`
                color: #FFF;
                text-align:center;
                font-family: 'Libre Baskerville', serif;
                font-size: 70px;
                font-style: normal;
                line-height: 45.339px;
                letter-spacing: -10.638px;
                text-transform: uppercase;
                position: relative;
                top:10%;
        
                `}>
                Michelangelo
            </p>
    </div>

    <div 
        css={css`
            position: relative;
            top:-7%;
            color: #FFF;
            text-align: center;
            font-size: 30.059px;
            font-style: normal;
            font-weight: 500;
            line-height: 50px;
            text-transform: uppercase;
            font-family: 'Noto Sans KR', sans-serif;
            
        `}>
            <p>
            당신이 머무는 공간에는 무슨 색의 향이 흐르나요     
            </p>

            <p>
            질문지를 통해서 당신이 마음껏 취할 수 있는         
            </p>

            <p>
            천국의 향을 조향해 보세요      
            </p>
    </div>

    <div
        css={css`
        position: relative;
     
        `}>
        <Button buttonText='디퓨저 조향 시작하기' to='/place' backgroundColor='#2E2E2E' opacity={1}/>
        <Button buttonText='제품 추천 받기' to ='/recommand' backgroundColor='#2E2E2E' opacity={1}/>
    </div>

    </div>
)
}