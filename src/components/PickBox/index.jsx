import React, { useState } from 'react'
import { css } from '@emotion/react'

export const PickBox = ( props ) => {
    const [imageOpacity, setImageOpacity] = useState(1);
    const [showX, setShowX] = useState(false);

    const handleDivClick = () => {
        setImageOpacity ( imageOpacity === 1 ? 0 : 1 );
        setShowX(!showX);
    };

    return(
            <div className = {props.className} 
                css = {css`
                        background-color: rgba(255,255,255,0.5);
                        width: 140px;
                        height: 140px;
                        position: relative;
                        margin: 0;`}

                onClick = {handleDivClick}>
               
                    <img src = {props.img} 
                            alt ={props.className} 
                            css = {css`
                                    opacity : imageOpacity;
                                    display: showX ? 'none' : 'block';
                                    `}/>
                    {showX && ( <div
                                css = {css`
                                background-color: rgba(0,0,0,0.5);
                                width: 140px;
                                height: 140px;
                                
                                position: relative;
                                top: -12%;

                                margin: 0;
                                color: white;

                                display: flex; 
                                align-items: center;
                                justify-content: space-around;
                                `}

                                onClick = {(e) => { 
                                    e.stopProgagation(); 
                                    setShowX(false);}}> 
                                    <p css = {css`
                                                font-size: 140px;
                                                font-family: xx;
                                                `}>X</p> 
                                </div>)}
                        
        </div>
    )
}