import React from 'react'
import { Logo } from '../../components/Logo'
import { css } from '@emotion/react'

//props로 각 페이지 별 베너의 폰트 컬러, downer 배너 표시 여부 결정 가능
export const Layout= ( props ) =>{ 

    const pstyle = css`
    margin: 2.5%;
    font-size: 300%;
    `;
    
    const downBanner = css`
    display: flex;
    flex-direction: row;
    justify-content: space-around;

    background-color: rgba(255,255,255,0.3);
    height: 6%;
    width: 100%;
    position: absolute; 
    top: 21%;
    display: ${props.downBanner};
    `;
    
    
    return (
       
        <div css={css`
        width: 100%;
        height: 100%;
      
        background-color: black;
        
        display: flex;
        align-items: center;
        justify-content: space-around;
      `}>
            <Logo className="scentchoosingLogo"
                css = {css`
                    width: 40%;
                    height: auto;

                    position: absolute;
                    top: 5%;
                  
                    `}/>

            <div className="upperBanner"
                css = {css`
                    display: flex;
                    flex-direction: row;
                    justify-content: space-around;

                    background-color: rgba(255,255,255,0.5);
                    height: 6%;
                    width: 100%;
                    position: absolute;
                    top: 15%;
                `}>
                
                <p key = {key}
                    id = {key}
                    css = {css`
                        ${pstyle}
                        color: ${props.font === key ? 'white' : 'gray'};`}>{key.toUpperCase()}</p>
                <p css = {pstyle} id = "keyword">KEYWORD</p>
                <p css = {pstyle} id = "scent">SCENT</p>                
            </div>

            <div className="downBanner"
                css = {downBanner}>
                <p css = {pstyle} id = "top">TOP</p>
                <p css = {pstyle} id= "middle">MIDDLE</p>
                <p css = {pstyle} id= "base">BASE</p>                
            </div>

        </div>
    )
}