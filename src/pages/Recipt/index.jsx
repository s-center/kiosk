import recipt from '../../assets/QRimage/recipt.png'
import { css } from '@emotion/react'
import { Logo } from '../../components/Logo'
export const Recipt = () => {
    return (
        <div css={css`width:100%; height:100%; background-color:rgb(0,0,0);`}>
            <Logo css={css`width: 40%; position: relative; top: 10%; left: 29%;`} />
            <img src={recipt} alt="영수증" css={css`position: relative; top: 15%; left: -1%;`} />
        </div>
    )
}