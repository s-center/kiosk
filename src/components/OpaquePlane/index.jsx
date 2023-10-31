import { css } from '@emotion/react'

export const OpaquePlane = ({ children, ...props }) => (
  <div
    css={css`
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      
      background-color: rgba( 0, 0, 0, 0.3 );
      
      z-index: 5;
    `}
    {...props}
  >
    {children}
  </div>
)