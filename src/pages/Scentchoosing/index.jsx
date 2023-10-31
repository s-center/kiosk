import { Layout } from '../Layout/index'
import { css } from '@emotion/react'
import { NextPageButton } from '../../components/Button/nextPageButton'
import { Group, Row, TripleRowSlider } from '../../components/TripleRowSlider'

import pear from '../../assets/pear.png'
import basil from '../../assets/basil.png'
import lavender from '../../assets/lavender.png'
import freesia from '../../assets/freesia.png'
import jasmin from '../../assets/jasmin.png'
import peony from '../../assets/peony.png'
import cedarwood from '../../assets/cedarwood.png'
import musk from '../../assets/musk.png'
import vanilla from '../../assets/vanilla.png'

export const scentChoosing = () => {
  return (
    <div
      css={css`
        width: 100%;
        height: 100%;
      `}
    >
      <Layout downBanner="" mainCSS={css`height: 45%; flex-direction: column; justify-content: space-between;`}>
        <TripleRowSlider css={css`height: 100%;`} onSelect={console.log}>
          <Group>
            <Row id='pear' image={pear} />
            <Row id='basil' image={basil} />
            <Row id='lavender' image={lavender} />
          </Group>
          <Group>
            <Row id='freesia' image={freesia} />
            <Row id='jasmin' image={jasmin} />
            <Row id='peony' image={peony} />
          </Group>
          <Group>
            <Row id='cedarwood' image={cedarwood} />
            <Row id='musk' image={musk} />
            <Row id='vanilla' image={vanilla} />
          </Group>
        </TripleRowSlider>
        <NextPageButton to='/myscent'/>
      </Layout>
    </div>
  )
}