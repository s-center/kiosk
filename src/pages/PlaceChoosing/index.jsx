import { Layout } from '../Layout'
import { css } from '@emotion/react'
import { Slider, Slide } from '../../components/Slider'

import bathRoom from '../../assets/placeBanner/bath-room.jpg'
import bedRoom from '../../assets/placeBanner/bed-room.jpg'
import kidsRoom from '../../assets/placeBanner/kids-room.jpg'
import livingRoom from '../../assets/placeBanner/living-room.jpg'
import office from '../../assets/placeBanner/office.jpg'
import shoeCloset from '../../assets/placeBanner/shoe-closet.jpg'
import { useContext } from 'react'
import { UserPreference } from '../../App'
import { useMyScentNavigator } from '../../useMyScentNavigator'


const Card = ({ id, image, ...props }) => (
  <Slide id={id} css={css`width: 71%; height: 60%; top: 60%;`} {...props}>
    <img src={image} css={css`width: 100%; height: 100%; object-fit: contain; pointer-events: none;`} onDragStart={() => false} />
  </Slide>

)

export const PlaceChoosing = () => {
  const [userPreference, setUserPreference] = useContext(UserPreference)
  const myScentNavigator = useMyScentNavigator()

  return (
    <>
      <Layout downBanner='' noDownBanner css={css`width: 100%; height: 100%;`}>
        <Slider
          css={css`
          width: 100%; 
          height: 100%;
          
          display: flex;
          flex-direction: column-reverse;
          justify-content: flex-start;
          align-content: center;
        `}
          onSelect={place => setUserPreference(({ ...userPreference, place }))}
        >
          <Card id='bath-room' image={bathRoom} />
          <Card id='bed-room' image={bedRoom} />
          <Card id='kids-room' image={kidsRoom} />
          <Card id='living-room' image={livingRoom} />
          <Card id='office' image={office} />
          <Card id='shoe-closet' image={shoeCloset} />
        </Slider>
      </Layout>
      {myScentNavigator}
    </>
  )
}