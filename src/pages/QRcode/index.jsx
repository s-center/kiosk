import React from 'react'
import QRimage from '../../assets/QRimage/qrwhite.png'
import { Logo } from '../../components/Logo'
import { css } from '@emotion/react'
import qrBackground from '../../assets/QRimage/qrBackground.png'
import { Button } from '../../components/Button'
export const QRcode = () => {
    return (
        <div>
            <img src={qrBackground} alt="배경" css={css`width:100%; height:100%; z-index:-1; position: absolute;`} />
            <Logo css={css`position: absolute; top: 6%; width: 40%; left: 30%;`} />
            <img src={QRimage} alt="qr" css={css`position: absolute; width: 30%; top: 10%; left: 30%;`} />

            <Button to='/recommand' buttonText={'시제품 추천받기'} css={css`position: absolute; top: 70%;`} />
            <Button to='/starting' buttonText={'홈으로 돌아가기'} />
        </div>
    )
}