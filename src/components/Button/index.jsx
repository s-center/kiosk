import { css } from '@emotion/react';
import React from 'react';
import {Link} from 'wouter';


export const Button = ({buttonText, to, backgroundColor, opacity}) =>{
    
    const buttonSyles =css`
    background-color: ${backgroundColor || black}; //default color: black
    opacity: ${opacity || 0.5}; //default opacity: 0.5
    display: flex;
    width: 648px;
    height: 132px;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    border-radius: 15px;
    margin:20px;
    font-size: 30px;
    font-family: 'Noto Sans KR', sans-serif;
    border:none;
            
    `
    
    return(
        <div>
            <button
                css={buttonSyles}>
                <Link to={to} css={css`color:#FFF; text-decoration: none;`}>{buttonText}</Link>
            </button>
        </div>
    );
}