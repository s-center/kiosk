import { Keyword } from '../../components/Keyword'
import { Layout } from '../Layout'
import React, { useState } from 'react'
import { css } from '@emotion/react'
import { NextPageButton } from '../../components/Button/nextPageButton'


export const KeywordChoosing = () => {
    return (
        <Layout downBanner='none'>
            <div css={css` width: 100%; height: 100%; position: fixed; top:0;`}>
                {/* 버튼 작동 방법을 몰라 우선 각 컴포넌트 작성만 해두었습니다! 지금 시간 없으시면 이따 만나서 같이 하면 될 것 같아요! */}
                {/* 
                <Keyword className="lovely"
                    fr='245' fg='120' fb='136'
                    sr='249' sg='172' sb='123'
                    tr='224' tg='25' tb='89'
                    for='205' fog='112' fob='165'
                    fir='243' fig='155' fib='167'
                    maxRadius={400} minRadius={250} gradient='0.01' totalParticles='40'
                /> */}

                {/* <Keyword className="positive"
                    fr='253' fg='234' fb='60'
                    sr='253' sg='180' sb='1'
                    tr='255' tg='233' tb='135'
                    for='233' fog='253' fob='165'
                    fir='181' fig='228' fib='45'
                    maxRadius={400} minRadius={80} gradient='0.5' totalParticles='120'
                /> 

                <Keyword className="cold"
                    fr='4' fg='161' fb='243'
                    sr='141' sg='236' sb='246'
                    tr='6' tg='123' tb='229'
                    for='0' fog='1' fob='146'
                    fir='6' fig='123' fib='229'
                    maxRadius={400} minRadius={200} gradient='0.7' totalParticles='100'
                    vx={1} vy={1}
                />*/}
                {/*
                <Keyword className="calm"
                    fr='53' fg='104' fb='118'
                    sr='1' sg='8' sb='6'
                    tr='126' tg='174' tb='192'
                    for='162' fog='66' fob='81'
                    fir='211' fig='110' fib='127'
                    maxRadius={400} minRadius={100} gradient='0.7' totalParticles='300'
                    vx={1} vy={2}
            /> 

                <Keyword className="passionate"
                    fr='209' fg='36' fb='2'
                    sr='255' sg='40' sb='0'
                    tr='255' tg='145' tb='55'
                    for='237' fog='165' fob='143'
                    fir='167' fig='1' fib='3'
                    maxRadius={200} minRadius={90} gradient='0.7' totalParticles='4000'
                    vx={1} vy={7}
                />
                */}
                <Keyword className="sensual"
                    fr='82' fg='36' fb='145'
                    sr='240' sg='76' sb='183'
                    tr='131' tg='21' tb='35'
                    for='42' fog='6' fob='59'
                    fir='194' fig='88' fib='222'
                    maxRadius={250} minRadius={200} gradient='0.7' totalParticles='100'
                    vx={3} vy={1}
                />

            </div>

        </Layout>

    )
}