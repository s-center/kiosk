import { PlaceChoosing } from "../PlaceChoosing";
import { KeywordChoosing } from "../KeywordChoosing";
import { ScentChoosing } from "../Scentchoosing";
import { useState } from "react";
import { css } from '@emotion/react'
import { Link } from 'wouter'
export const Guide = () => {
    const [isDivVisiblechoose, setDivVisiblechoose] = useState(0);
    const [isDivVisibleKeyword, setDivVisibleKeyword] = useState(0);
    const [isDivVisibleScent, setDivVisibleScent] = useState(0)
    const handleDivClick = () => {
        setDivVisiblechoose(isDivVisiblechoose + 1);
        setDivVisibleKeyword(isDivVisibleKeyword + 2);
        setDivVisibleScent(isDivVisibleScent + 3);

    };
    return (<>
        {(isDivVisiblechoose === 0 && isDivVisibleKeyword === 0 && isDivVisibleScent === 0) && (
            <div css={css`
        background-color: rgba(0,0,0,0.7); 
        width: 100%; 
        height:100%; 
        position:absolute; 
        z-index:9;`}
                onClick={handleDivClick}>
                <p css={css`
        color:rgb(255,255,255); 
        position: relative; 
        top :50%; 
        left: 30%; 
        font-size: 45px;
        font-family:NotoSansKR-Regular;
        text-shadow: 5px 5px 30px rgb(255,255,255);`}>디퓨저를 배치하고 싶은</p>
                <p css={css`
      color:rgb(255,255,255); 
      position: relative; 
      top :51%; 
      left: 34%; 
      font-size: 200%; 
      text-shadow: 5px 5px 30px rgb(255,255,255);
      font-size: 45px;
        font-family:NotoSansKR-Regular;`}>장소를 선택합니다</p></div>
        )}
        {(isDivVisiblechoose === 0 && isDivVisibleKeyword === 0 && isDivVisibleScent === 0) && (<PlaceChoosing />)}

        {(isDivVisiblechoose === 1 && isDivVisibleKeyword === 2 && isDivVisibleScent === 3) && (
            <div css={css`
        background-color: rgba(0,0,0,0.7); 
        width: 100%; 
        height:100%; 
        position:absolute; 
        z-index:9;`}
                onClick={handleDivClick}>
                <p css={css`
        color:rgb(255,255,255); 
        position: relative; 
        top :50%; 
        left: 32%; 
        font-size:45px;
        text-shadow: 5px 5px 30px rgb(255,255,255);`}>디퓨저 병을 감싸줄</p>
                <p css={css`
      color:rgb(255,255,255); 
      position: relative; 
      top :51%; 
      left: 35%; 
      font-size: 45px;
      text-shadow: 5px 5px 30px rgb(255,255,255);`}>색을 선택합니다</p></div>
        )}
        {(isDivVisiblechoose === 1 && isDivVisibleKeyword === 2 && isDivVisibleScent === 3) && (<KeywordChoosing />)}

        {(isDivVisiblechoose === 2 && isDivVisibleKeyword === 4 && isDivVisibleScent === 6) && (
            <Link to='/placechoosing'>
                <div css={css`
        background-color: rgba(0,0,0,0.7); 
        width: 100%; 
        height:100%; 
        position:absolute; 
        z-index:9;`}
                    onClick={handleDivClick}>
                    <p css={css`
        color:rgb(255,255,255); 
        position: relative; 
        top :50%; 
        left: 33%; 
        font-size: 45px;
        text-shadow: 5px 5px 30px rgb(255,255,255);`}>디퓨저에 넣고싶은</p>
                    <p css={css`
      color:rgb(255,255,255); 
      position: relative; 
      top :51%; 
      left: 35%; 
      font-size: 45px; 
      text-shadow: 5px 5px 30px rgb(255,255,255);`}>향을 선택합니다</p></div></Link>
        )}
        {(isDivVisiblechoose === 2 && isDivVisibleKeyword === 4 && isDivVisibleScent === 6) && (<ScentChoosing />)}



    </>
    )
}