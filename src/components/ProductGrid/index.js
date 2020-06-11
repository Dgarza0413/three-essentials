import React, { useContext } from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import { css } from '@emotion/core'

import StoreContext from '~/context/StoreContext'
import {
  Grid,
  Product,
  Title,
  PriceTag,
  Hover
} from './styles'
import { Img } from '~/utils/styles'

const ProductGrid = () => {
  const { store: { checkout } } = useContext(StoreContext)

  const { allShopifyCollection } = useStaticQuery(
    graphql`
      query {
        allShopifyCollection(limit: 10) {
          group(field: id) {
            nodes {
              description
              title
              products {
                title
                handle
                images {
                  id
                  originalSrc
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
          }
        }
      }
    `
  )
  // const { allShopifyProduct } = useStaticQuery(
  //   graphql`
  //     query {
  //       allShopifyProduct(
  //         sort: {
  //           fields: [createdAt]
  //           order: DESC
  //         }
  //       ) {
  //         edges {
  //           node {
  //             id
  //             title
  //             handle
  //             createdAt
  //             images {
  //               id
  //               originalSrc
  //               localFile {
  //                 childImageSharp {
  //                   fluid(maxWidth: 910) {
  //                     ...GatsbyImageSharpFluid_withWebp_tracedSVG
  //                   }
  //                 }
  //               }
  //             }
  //             variants {
  //               price
  //             }
  //           }
  //         }
  //       }
  //     }
  //   `
  // )

  console.log(allShopifyCollection)

  const getPrice = price => Intl.NumberFormat(undefined, {
    currency: checkout.currencyCode ? checkout.currencyCode : 'EUR',
    minimumFractionDigits: 2,
    style: 'currency',
  }).format(parseFloat(price ? price : 0))

  return (
    <div>
      {
        allShopifyCollection.group.map(({ nodes: [{ title, products }] }) => {
          return <div>
            <div
              css={{
                height: '400px',
                backgroundColor: 'blue'
              }}
            >{title}</div>
            <Grid>
              {products.map(({ handle, images: [image], title }) => {
                console.log(handle)
                console.log(image)
                console.log(title)
                return <>
                  <Link to={`/product/${handle}`}>
                    {image !== undefined
                      ? <Img
                        fluid={image.localFile.childImageSharp.fluid}
                        alt={handle}
                        fadeIn={true}
                      />
                      : <img src={"https://via.placeholder.com/150"} />
                    }
                    {handle}
                    {title}
                  </Link>
                </>
              })}
            </Grid>
          </div>
        })
      }
    </div>
  )
}

export default ProductGrid
