import React, { useContext, useRef } from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons'
// import { useSpring, animated } from 'react-spring'

import StoreContext from '~/context/StoreContext'
import { Grid } from './styles'
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
      style={{ backgroundColor: '#20232f', zIndex: -1 }}
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
        offset={1.9999}
        speed={1}
        style={{ backgroundColor: '#8FAD88', zIndex: -1 }}
      />

      <ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.1 }}>
        <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '55%', zIndex: -1 }} />
        <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '15%', zIndex: -1 }} />
      </ParallaxLayer>

      <ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: 0.1 }}>
        <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '70%', zIndex: -1 }} />
        <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '40%', zIndex: -1 }} />
      </ParallaxLayer>

      <ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.2 }}>
        <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '10%', zIndex: -1 }} />
        <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '75%', zIndex: -1 }} />
      </ParallaxLayer>

      <ParallaxLayer offset={1.6} speed={-0.1} style={{ opacity: 0.4 }}>
        <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '60%', zIndex: -1 }} />
        <img src={url('cloud')} style={{ display: 'block', width: '25%', marginLeft: '30%', zIndex: -1 }} />
        <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '80%', zIndex: -1 }} />
      </ParallaxLayer>

      <ParallaxLayer offset={2.6} speed={0.4} style={{ opacity: 0.6 }}>
        <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '5%', zIndex: -1 }} />
        <img src={url('cloud')} style={{ display: 'block', width: '15%', marginLeft: '75%', zIndex: -1 }} />
      </ParallaxLayer>

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

      <ParallaxLayer
        offset={2.2}
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
      {
        allShopifyCollection.group.map(({ nodes: [{ title, products }] }) => {
          return <div>
            {title !== "Home page"
              ?
              <div
                style={{
                  height: '500px',
                  backgroundSize: '80%',
                  backgroundPosition: 'center',
                  zIndex: 1
                }}
              >
                <span
                  style={{
                    fontSize: '50px',
                    color: 'white'
                  }}>{title}</span>
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
                      : <img
                        style={{ zIndex: 1 }}
                        src={"https://via.placeholder.com/900"} />
                    }
                    {/* {handle}
                    {title} */}
                  </Link>
                </>
              })}
            </Grid>
          </div>
        })
      }
    </Parallax >
  )
}

export default ProductGrid
