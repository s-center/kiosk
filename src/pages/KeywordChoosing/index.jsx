import { Keyword } from '../../components/Keyword'
import { Layout } from '../Layout'
import { useContext, useState } from 'react'
import { css } from '@emotion/react'
import { NextPageButton } from '../../components/Button/nextPageButton'
import { UserPreference } from '../../App.jsx'
import { useMyScentNavigator } from '../../useMyScentNavigator'

import lovelyLabel from '../../assets/label/lovely-label.png'
import positiveLabel from '../../assets/label/positive-label.png'
import coldLabel from '../../assets/label/cold-label.png'
import calmLabel from '../../assets/label/calm-label.png'
import passionateLabel from '../../assets/label/passionate-label.png'
import sensualLabel from '../../assets/label/sensual-label.png'

export const KeywordChoosing = () => {
  const [userPreference, setUserPreference] = useContext(UserPreference)
  const myScentNavigator = useMyScentNavigator()

  const components = [
    <Keyword className='lovely'
      fr='245' fg='120' fb='136'
      sr='249' sg='172' sb='123'
      tr='224' tg='25' tb='89'
      for='205' fog='112' fob='165'
      fir='243' fig='155' fib='167'
      maxRadius={300} minRadius={200} gradient={0.1} totalParticles={100} vx={2} vy={2}
      key='lovely' onClick={() => setUserPreference(({ ...userPreference, keyword: currentComponentClassName.props.className }))}
      label={lovelyLabel} isLeft
    />,
    <Keyword className='sensual'
      fr='82' fg='36' fb='145'
      sr='200' sg='106' sb='179'
      tr='131' tg='21' tb='35'
      for='42' fog='6' fob='59'
      fir='194' fig='88' fib='222'
      maxRadius={250} minRadius={200} gradient={0.7} totalParticles={100}
      vx={3} vy={1}
      key='sensual' onClick={() => setUserPreference(({ ...userPreference, keyword: currentComponentClassName.props.className }))}
      label={sensualLabel}
    />,
    <Keyword className='positive'
      fr='253' fg='234' fb='60'
      sr='253' sg='180' sb='1'
      tr='255' tg='233' tb='135'
      for='233' fog='253' fob='165'
      fir='181' fig='228' fib='45'
      maxRadius={400} minRadius={80} gradient={0.5} totalParticles={120} vx={3} vy={3}
      key='positive' onClick={() => setUserPreference(({ ...userPreference, keyword: currentComponentClassName.props.className }))}
      label={positiveLabel} isLeft
    />,
    <Keyword className="cold"
      fr='4' fg='161' fb='243'
      sr='141' sg='236' sb='246'
      tr='6' tg='123' tb='229'
      for='0' fog='1' fob='146'
      fir='6' fig='123' fib='229'
      maxRadius={300} minRadius={200} gradient={0.9} totalParticles={50}
      vx={2} vy={1}
      key='cold' onClick={() => setUserPreference(({ ...userPreference, keyword: currentComponentClassName.props.className }))}
      label={coldLabel}
    />,
    <Keyword className='calm'
      fr='53' fg='104' fb='118'
      sr='1' sg='8' sb='6'
      tr='12' tg='166' tb='180'
      for='138' fog='78' fob='87'
      fir='175' fig='124' fib='133'
      maxRadius={400} minRadius={300} gradient={0.7} totalParticles={50}
      vx={0.5} vy={0.5}
      key='calm' onClick={() => setUserPreference(({ ...userPreference, keyword: currentComponentClassName.props.className }))}
      label={calmLabel} isLeft
    />,
    <Keyword className='passionate'
      fr='209' fg='36' fb='2'
      sr='255' sg='40' sb='0'
      tr='255' tg='145' tb='55'
      for='237' fog='165' fob='143'
      fir='167' fig='1' fib='3'
      maxRadius={200} minRadius={90} gradient={0.7} totalParticles={4000}
      vx={1} vy={7}
      key='passionate' onClick={() => setUserPreference(({ ...userPreference, keyword: currentComponentClassName.props.className }))}
      label={passionateLabel}
    />
  ]

  const [currentComponentIndex, setCurrentComponentIndex] = useState(0)

  const changeComponent = (step) => {
    setCurrentComponentIndex((prevIndex) => {
      let newIndex = prevIndex + step
      if (newIndex < 0) {
        newIndex = components.length - 1
      } else if (newIndex >= components.length) {
        newIndex = 0
      }
      return newIndex
    })
  }


  const currentComponentClassName = components[currentComponentIndex]

  return (
    <>
      <Layout downBanner='none'>
        <div css={css` width: 100%; height: 100%; position: fixed; top:0;`}>
          {currentComponentClassName}
          <NextPageButton onClick={() => {
            changeComponent(1)
          }} />
          <NextPageButton reversed onClick={() => {
            changeComponent(-1)
          }} />
        </div>
      </Layout>
      {myScentNavigator}
    </>
  )
}