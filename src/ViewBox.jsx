import { css } from '@emotion/react'

export const ViewBox = ({ children }) => (
  <div
    css={css`
      width: 1080px;
      height: 1920px;
      
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    `}
  >
    {children}
  </div>
)