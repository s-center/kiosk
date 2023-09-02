import { css } from '@emotion/react'

export const ViewBox = ({ children }) => (
  <div
    css={css`
      width: 957px;
      height: 1736px;
      
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    `}
  >
    {children}
  </div>
)