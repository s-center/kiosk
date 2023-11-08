import circle from '../../assets/circle.png'
import { css } from '@emotion/react'
import './QRwaid.css'
export const QRwait = () => {
  function redirectToNewPage() {
    window.location.href = '/qrcode'
  }

  // 7초 후에 redirectToNewPage 함수를 실행
  setTimeout(redirectToNewPage, 5000) // 7초는 밀리초로 계산됨
  return (
    <div css={css`width:100%; height:100%; background-color: rgb(0,0,0); z-index:0; position: absolute;`}>
      <img className="rotate-image" src={circle} alt="circle" css={css` z-index:2; position: relative; top:22%; left:8%;`} />
      <p css={css`color: rgb(255,255,255); 
            position: absolute;
            top: 800px; 
            left:357px; 
            font-size:50px; 
            z-index:3;
            text-shadow: 5px 5px 30px rgb(255,255,255);
            font-family: NotoSansKR-Regular;`}>조향 큐알 코드가 </p>
      <p css={css`color: rgb(255,255,255);
text-shadow: 5px 5px 30px rgb(255,255,255);
            position: absolute;
            top: 900px; 
            left:387px; 
            font-size:50px; 
            font-family: NotoSansKR-Regular;
            z-index:3;`}>생성 중이에요 </p>
    </div>
  )
}