import { css } from '@emotion/react'

import GodBottle from '../../assets/recommand/GodBottle.png'
import Package from '../../assets/recommand/Package.png'
import BottleShadow from '../../assets/recommand/bottle-shadow.png'
import PackageShadow from '../../assets/recommand/package-shadow.png'
import ProductConfig from './product-config.json'

import { Button } from '../../components/Button/index.jsx'

export const Product = ({ params: { product } }) => (
  <div
    css={css`
      background: linear-gradient(black 25%, ${ProductConfig[product]['background-color']});
      
      width: 100%;
      height: 100%;
    `}
  >
    <div>
      <img
        css={css`
          position: absolute;
          top: 100px;
          left: 180px;
        `}
        src={Package}
      />
      <img
        css={css`
          position: absolute;
          top: 750px;
          left: 251px;
          
        `}
        src={PackageShadow}
      />
      <img
        css={css`
          position: absolute;
          top: 180px;
          left: 445px;
          width:44%;
        `}
        src={GodBottle}
      />
      <img
        css={css`
          position: absolute;
          top: 900px;
          left: 495px;
        `}
        src={BottleShadow}
      />
    </div>
    <div
      css={css`
        position: absolute;
        top: 1000px;
      
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        
        width: 100%;
      `}
    >
      <p
        css={css`
        color: #FFF;
        font-size: 35px;
        font-family: Baskerville;
        position: relative;
        top: 20px;
        margin-bottom: 50px;
      `}
      >
        {ProductConfig[product]['title']} SCENTS
      </p>
      <div css={css`margin-bottom: 76px;`}>
        {
          ProductConfig[product]['catchphrase'].map((text, index) =>
            <p
              css={css`
              color: #FFF;
              font-size: 48px;
              font-weight: bold;
              font-family: NotoSansKR-Mideum;
              text-align: center;
              line-height:1.8;
              letter-spacing:-2px;
            `}
              key={index}
            >
              {text}
            </p>
          )
        }
      </div>
      {
        ProductConfig[product]['explanation'].map((text, index) =>
          <p
            css={css`
              color: #FFF;
              font-size: 28px;
              line-height: 1.9;
              font-family:NotoSansKR-Light;
            `}
            key={index}
          >
            {text}
          </p>
        )
      }
      <Button className={css`background-color: black; margin-top: 100px;`} to={`/product/${product}/receipt`} buttonText='제품 구매하기'></Button>
    </div>
  </div>
)