import React, { useContext } from 'react'
import { Link } from 'gatsby'

import StoreContext from '~/context/StoreContext'
import { Wrapper } from './styles'

const LineItem = props => {
  const { item } = props
  const {
    removeLineItem,
    store: { client, checkout },
  } = useContext(StoreContext)

  const variantImage = item.variant.image ? (
    <img
      src={item.variant.image.src}
      alt={`${item.title} product shot`}
      style={{ height: '60px' }}
    />
  ) : null

  const selectedOptions = item.variant.selectedOptions
    ? item.variant.selectedOptions.map(
      option => `${option.name}: ${option.value} `
    )
    : null

  const handleRemove = () => {
    removeLineItem(client, checkout.id, item.id)
  }

  return (
    <Wrapper>
      <Link to={`/product/${item.variant.product.handle}/`}>
        {variantImage}
      </Link>
      <p>
        {item.title}
        {`  `}
        {item.variant.title === !'Default Title' ? item.variant.title : ''}
      </p>
      {selectedOptions}{` x `}
      {item.quantity}
      <span>
        ${item.variant.price * item.quantity}
      </span>
      <button
        css={{
          padding: '10px',
          backgroundColor: 'white',
          color: 'black',
          '&:hover': {
            backgroundColor: 'grey',
          }
        }}
        onClick={handleRemove}>Remove</button>
    </Wrapper>
  )
}

export default LineItem
