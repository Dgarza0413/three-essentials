import React, { useContext } from 'react'
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons'

import StoreContext from '~/context/StoreContext'
import LineItem from './LineItem'

const Cart = () => {
  const {
    store: { checkout },
  } = useContext(StoreContext)

  const handleCheckout = () => {
    window.open(checkout.webUrl)
  }

  const lineItems = checkout.lineItems.map(item => (
    <LineItem key={item.id.toString()} item={item} />
  ))

  return (
    <>
      <div css={{
        marginBottom: '5%',
        color: 'white'
      }}>
        {lineItems}
      </div>
      <div css={{ color: 'white' }}>
        <h2>Subtotal</h2>
        <p>$ {checkout.subtotalPrice}</p>
        <br />
        <h2>Taxes</h2>
        <p>$ {checkout.totalTax}</p>
        <br />
        <h2>Total</h2>
        <p>$ {checkout.totalPrice}</p>
      </div>
      <br />
      <button
        css={{
          padding: '10px',
          backgroundColor: 'black',
          color: 'white',
          '&:hover': {
            backgroundColor: 'grey',
            color: 'white'
          }
        }}
        onClick={handleCheckout}
        disabled={checkout.lineItems.length === 0}
      >
        Check out
      </button>
    </>
  )
}

export default Cart
