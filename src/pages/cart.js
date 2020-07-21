import React from 'react'

import Cart from '~/components/Cart'
import { Container } from '~/utils/styles'

import {
  Parallax,
  ParallaxLayer
} from 'react-spring/renderprops-addons'

const url = (name, wrap = false) => `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`

const CartPage = () => (
  <Parallax ref={ref => ref} style={{ backgroundColor: '#20232f', zIndex: -1 }}>
    <ParallaxLayer offset={0} speed={0} factor={3} style={{ backgroundImage: url('stars', true), backgroundSize: 'cover', zIndex: -1 }} />
    <Container>
      <h1 css={{ color: 'white' }}>Cart</h1>
      <Cart />
    </Container>
  </Parallax>
)

export default CartPage
