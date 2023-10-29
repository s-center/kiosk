import React from 'react'
import { Layout } from '../Layout/index'
import { css } from '@emotion/react'
export const scentChoosing = () => {
    return (
        <div css = {css`
            width: 100%;
            height: 100%;`}>
            <Layout downBanner=""> <div><p css={css`color: white;`}>더미디브</p></div></Layout>
        </div>

    )
}