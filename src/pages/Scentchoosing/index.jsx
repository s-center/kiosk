import { Layout } from '../Layout/index'
import { css } from '@emotion/react'
import { NextPageButton } from '../../components/Button/nextPageButton'


export const scentChoosing = () => {
  return (
    <div css = {css`
            width: 100%;
            height: 100%;`}>

      <Layout downBanner=""> 
        <div><p>이거 임시고 원래는 mydiffuser로 가는 게 아니여</p></div>
        <NextPageButton to='/myscent'/>
      </Layout>
    </div>

  )
}