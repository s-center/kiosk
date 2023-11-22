import { css } from '@emotion/react';

export const ViewBox = ({ children }) => (
  <div
    css={css`
      @media (min-width: 1090px){
        width: 100vw;
        height: 100vh;
        margin: 0; 
    
      }

      @media (max-width: 1081px){
        width: 1080px;
        height: 1920px;
        margin: 0; /* 추가된 부분 */
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      
      }
    `}
  >
    {children}
  </div>
);

