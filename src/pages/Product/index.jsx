import { css } from '@emotion/react'

import GodBottle from '../../assets/GodBottle.png'
import Package from '../../assets/Package.png'
import ProductConfig from './product-config.json'

import { Button } from '../../components/Button/index.jsx'

export const Product = ({ params: { product }}) => (
  <div
    css={css`
      background: linear-gradient(black 20%, rgb(70, 70, 70) 50%, ${ProductConfig[product]['background-color']});
      
      width: 100%;
      height: 100%;
    `}
  >
    <div>
      <img
        css={css`
          position: absolute;
          top: 218px;
          left: 218px;
        `}
        src={Package}
      />
      <img
        css={css`
          position: absolute;
          top: 178px;
          left: 452px;
        `}
        src={GodBottle}
      />
    </div>
    <div
      css={css`
        position: absolute;
        top: 1100px;
      
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
        font-size: 48px;
        font-family: Baskerville;
        
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
              font-family: Baskerville;
              text-align: center;
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
            `}
            key={index}
          >
            {text}
          </p>
        )
      }
      <Button className={css`background-color: black; margin-top: 140px;`} to='' buttonText='제품 구매하기'></Button>
    </div>
  </div>
)