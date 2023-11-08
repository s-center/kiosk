import React from 'react'
import QRimage from '../../assets/QRCODE.png'
import { Logo } from '../../components/Logo'
import { css } from '@emotion/react'
import qrBackground from '../../assets/QRimage/qrBackground.png'
import { Button } from '../../components/Button'
import QRCODE from '../../assets/QRtext.png'
export const QRcode = () => {

  return (
    <div>
      <img src={qrBackground} alt="배경" css={css`width:100%; height:100%; position: absolute; z-index:-1;`} />
      <Logo css={css`width: 42%; position: relative; top:-200px; left:29%;`} />
      <img src={QRimage} alt="qr" css={css`width: 40%; position: relative; top:450px; left: -10%; `} />
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