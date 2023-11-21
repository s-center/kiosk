import { Layout } from '../Layout/index'
import { css } from '@emotion/react'
import { Group, Row, TripleRowSlider } from '../../components/TripleRowSlider'

import pear from '../../assets/rowBanner/pear.png'
import basil from '../../assets/rowBanner/basil.png'
import lavender from '../../assets/rowBanner/lavender.png'
import freesia from '../../assets/rowBanner/freesia.png'
import jasmin from '../../assets/rowBanner/jasmin.png'
import peony from '../../assets/rowBanner/peony.png'
import cedarwood from '../../assets/rowBanner/cedarwood.png'
import musk from '../../assets/rowBanner/musk.png'
import vanilla from '../../assets/rowBanner/vanilla.png'
import { useContext } from 'react'
import { UserPreference } from '../../App'
import { useMyScentNavigator } from '../../useMyScentNavigator'

export const ScentChoosing = () => {
  const [userPreference, setUserPreference] = useContext(UserPreference)
  const myScentNavigator = useMyScentNavigator()

  return (
    <>
      <div
        css={css`
        width: 100%;
        height: 100%;
      `}
      >
        <Layout downBanner="" mainCSS={css`height: 45%; flex-direction: column; justify-content: space-between;`}>
          <TripleRowSlider css={css`height: 100%;`} onSelect={(id, kind) => setUserPreference(({ ...userPreference, scent: { ...userPreference.scent, [kind]: id } }))}>
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
      {myScentNavigator}
    </>
  )
}