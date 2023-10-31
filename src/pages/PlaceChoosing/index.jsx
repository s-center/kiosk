import { Layout } from '../Layout'
import { css } from '@emotion/react'
import { Slider, Slide } from '../../components/Slider'

import bathRoom from '../../assets/bath-room.png'
import bedRoom from '../../assets/bed-room.png'
import kidsRoom from '../../assets/kids-room.png'
import livingRoom from '../../assets/living-room.png'
import office from '../../assets/office.png'
import shoeCloset from '../../assets/shoe-closet.png'

const Card = ({ id, image, ...props }) => (
  <Slide id={id} css={css`width: 38.9%; height: 70%; top: 60%; box-shadow: 0 0 50px rgb(255 255 255 / 50%);`} {...props}>
    <img src={image} css={css`width: 100%; height: 100%; object-fit: contain; pointer-events: none;`} onDragStart={() => false} />
  </Slide>
)

export const PlaceChoosing = () => {
  return (
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
        onSelect={console.log}
      >
        <Card id='bath-room' image={bathRoom} />
        <Card id='bed-room' image={bedRoom} />
        <Card id='kids-room' image={kidsRoom} />
        <Card id='living-room' image={livingRoom} />
        <Card id='office' image={office} />
        <Card id='shoe-closet' image={shoeCloset} />
      </Slider>
    </Layout>
  )
}