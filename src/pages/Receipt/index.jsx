import { css } from '@emotion/react'
import { Logo } from '../../components/Logo'
import JeusReceipt from '../../assets/Recipt/zeusReceipt.jpg'
import ApolloReceipt from '../../assets/Recipt/apolloReceipt.jpg'
import AphroditeReceipt from '../../assets/Recipt/aphroditeReceipt.jpg'
import AthensReceipt from '../../assets/Recipt/athensReceipt.jpg'
import ErosReceipt from '../../assets/Recipt/erosReceipt.jpg'
import IcarusReceipt from '../../assets/Recipt/icarusReceipt.jpg'

import ProductConfig from '../Product/product-config.json'
export const Receipt = ({ params: { product } }) => {
  let whichProduct = ''

  switch (ProductConfig[product]['title']) {
  case 'ZEUS':
    whichProduct = JeusReceipt
    break
  case 'EROS':
    whichProduct = ErosReceipt
    break
  case 'ICARUS':
    whichProduct = IcarusReceipt
    break
  case 'APHRODITE':
    whichProduct = AphroditeReceipt
    break
  case 'ATHENS':
    whichProduct = AthensReceipt
    break
  case 'APOLLO':
    whichProduct = ApolloReceipt
    break
  default:
    break
  }

  return (
    <div css={css`width: 100%; height: 100%; background-color: rgb(0, 0, 0);`}>
      <Logo css={css`width: 40%; position: relative; top: 10%; left: 29%;`} />
      <img src={whichProduct} alt="Receipt" css={css`position: relative; top: 15%; left: 13.5%;`} />
    </div>
  )
}
