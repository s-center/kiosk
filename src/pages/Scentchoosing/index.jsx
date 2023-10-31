import { Layout } from '../Layout/index'
import { css } from '@emotion/react'
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
import { useContext } from 'react'
import { UserPreference } from '../../App'

export const ScentChoosing = () => {
  const [, setUserPreference] = useContext(UserPreference)

  return (
    <div
      css={css`
        width: 100%;
        height: 100%;
      `}
    >
      <Layout downBanner="" mainCSS={css`height: 45%; flex-direction: column; justify-content: space-between;`}>
        <TripleRowSlider css={css`height: 100%;`} onSelect={(id, kind) => setUserPreference(preference => ({ ...preference, scent: { ...preference.scent, [kind]: id } }))}>
          <Group name='top'>
            <Row id='pear' image={pear} />
            <Row id='basil' image={basil} />
            <Row id='lavender' image={lavender} />
          </Group>
          <Group name='middle'>
            <Row id='freesia' image={freesia} />
            <Row id='jasmin' image={jasmin} />
            <Row id='peony' image={peony} />
          </Group>
          <Group name='bottom'>
            <Row id='cedarwood' image={cedarwood} />
            <Row id='musk' image={musk} />
            <Row id='vanilla' image={vanilla} />
          </Group>
        </TripleRowSlider>
      </Layout>
    </div>
  )
}