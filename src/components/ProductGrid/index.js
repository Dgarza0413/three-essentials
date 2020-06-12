import React, { useContext, useRef } from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons'
// import { useSpring, animated } from 'react-spring'

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

  // const getPrice = price => Intl.NumberFormat(undefined, {
  //   currency: checkout.currencyCode ? checkout.currencyCode : 'EUR',
  //   minimumFractionDigits: 2,
  //   style: 'currency',
  // }).format(parseFloat(price ? price : 0))
  const url = (name, wrap = false) => `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`

  let parallax;
  return (
    <Parallax pages={3} ref={ref => parallax = ref}
      style={{
        backgroundColor: '#20232f',
        zIndex: -1
      }}
    >
      <ParallaxLayer
        offset={1}
        speed={1}
        style={{ backgroundColor: '#805E73', zIndex: -1 }}
      />
      <ParallaxLayer
        offset={2}
        speed={1}
        style={{ backgroundColor: '#87BCDE', zIndex: -1 }}
      />
      <ParallaxLayer
        offset={0}
        speed={0}
        factor={3}
        style={{
          backgroundImage: url('stars', true),
          backgroundSize: 'cover',
          zIndex: -1
        }}
      />
      {
        allShopifyCollection.group.map(({ nodes: [{ title, products }] }) => {
          return <div>
            {title !== "Home page"
              ?
              <div
                style={{
                  height: '400px',
                  backgroundSize: '80%',
                  backgroundPosition: 'center',
                  // backgroundImage: url('clients', true),
                  // zIndex: 1
                }}
              >
                {title}
              </div>
              : ""}
            <Grid>
              {products.map(({ handle, images: [image], title }) => {
                return <>
                  <Link to={`/product/${handle}`}>
                    {image !== undefined
                      ? <Img
                        fluid={image.localFile.childImageSharp.fluid}
                        alt={handle}
                        fadeIn={true}
                      />
                      : <img src={"https://via.placeholder.com/900"} />
                    }
                    {handle}
                    {title}
                  </Link>
                  <ParallaxLayer
                    offset={2.5}
                    speed={-0.4}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      pointerEvents: 'none'
                    }}
                  >
                    <img
                      src={url('earth')}
                      style={{ width: '60%' }}
                    />
                  </ParallaxLayer>
                </>
              })}
            </Grid>
            {/* </ParallaxLayer> */}
          </div>
        })
      }
      {/* </ParallaxLayer> */}
    </Parallax >
  )
}

export default ProductGrid
