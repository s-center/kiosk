import React from 'react'
import QRimage from '../../assets/QRimage/qrcode.png'
import { Logo } from '../../components/Logo'
import { css } from '@emotion/react'
import qrBackground from '../../assets/QRimage/qrBackground.jpg'
import { Button } from '../../components/Button'
import QRCODE from '../../assets/QRimage/QRtext.png'
export const QRcode = () => {
    const prop = 'https://postfiles.pstatic.net/MjAyMzExMjJfMjk1/MDAxNzAwNjIwNDc5OTgy.xntlLRSAYS-lPCUOPQWOD0of-nTblO8u_DGbDFeJC8wg.xR5hOFaKagx2RL8elSS96pnImmBSoTFA1w8paP3nEHAg.PNG.kge021114/Frame_14.png?type=w773';//추후 다른 디자인의 영수증이 만들어지면 해당 링크 props로 받아서 대입
    const url = `https://chart.apis.google.com/chart?cht=qr&chs=250x250&chl=${prop}`
    return (
        <div>
            <img src={qrBackground} alt="배경" css={css`width:100%; height:100%; position: absolute; z-index:-1;`} />
            <Logo css={css`width: 42%; position: relative; top:-200px; left:29%;`} />
            <img src={url} alt="qr"
                css={css`width: 40%; position: relative; top:450px; left: -10%; 
                    filter: invert(100%);
                    `} />
            <img src={QRCODE} alt='qrcode' css={css`width: 14%; position: relative; top: 640px; left: -780px;`} />
            <p css={css`color:rgb(255,255,255); 
            position: relative; 
            top: 720px;
            left: 10%; 
            font-size: 250%;font-family: NotoSansKR-Medium;`}>큐알 코드를 핸드폰으로 인식하여</p>
            <p css={css`color:rgb(255,255,255); 
            position: relative; 
            top: 740px;
            left: 10%; 
            font-size: 250%;
            font-family: NotoSansKR-Medium;`}>조향사에게 보여주세요</p>

            <div css={css`position: absolute; top: 75%; left: 20%;`}>
                <Button to='/recommand' buttonText={'시제품 추천받기'} className={css`background-color:rgb(255,255,255);`}
                    linkStyle={css`
            padding:30px; color: rgb(0,0,0);`} />
                <Button to='/starting' buttonText={'홈으로 돌아가기'} className={css`background-color:rgb(0,0,0);`} />
            </div>
        </div>
    )


}