import React from 'react'
import { graphql } from 'gatsby'

import SEO from '~/components/seo'
import ProductForm from '~/components/ProductForm'
import {
  Img,
  Container,
  TwoColumnGrid,
  GridLeft,
  GridRight,
} from '~/utils/styles'

import {
  Parallax,
  ParallaxLayer
} from 'react-spring/renderprops-addons'


import {
  ProductTitle,
  ProductDescription
} from './styles'

const ProductPage = ({ data }) => {
  const product = data.shopifyProduct

  const url = (name, wrap = false) => `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`
  return (
    <>
      <SEO title={product.title || ''} description={product.description || ''} />
      <Parallax ref={ref => ref} style={{ backgroundColor: '#20232f', zIndex: -1 }}>
        <ParallaxLayer offset={0} speed={0} factor={3} style={{ backgroundImage: url('stars', true), backgroundSize: 'cover', zIndex: -1 }} />

        <Container>
          <TwoColumnGrid>
            <GridLeft>
              {product.images.map(image => (
                <Img
                  fluid={image.localFile.childImageSharp.fluid}
                  key={image.id}
                  alt={product.title}
                />
              ))}
            </GridLeft>
            <GridRight>
              <ProductTitle>{product.title}</ProductTitle>
              <ProductDescription
                dangerouslySetInnerHTML={{ __html: product.descriptionHtml }}
              />
              <ProductForm product={product} />
            </GridRight>
          </TwoColumnGrid>
        </Container>
      </Parallax>
    </>
  )
}

export const query = graphql`
  query($handle: String!) {
    shopifyProduct(handle: { eq: $handle }) {
      id
      title
      handle
      productType
      description
      descriptionHtml
      shopifyId
      options {
        id
        name
        values
      }
      variants {
        id
        title
        price
        availableForSale
        shopifyId
        selectedOptions {
          name
          value
        }
      }
      priceRange {
        minVariantPrice {
          amount
          currencyCode
        }
        maxVariantPrice {
          amount
          currencyCode
        }
      }
      images {
        originalSrc
        id
        localFile {
          childImageSharp {
            fluid(maxWidth: 910) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    }
  }
`

export default ProductPage
