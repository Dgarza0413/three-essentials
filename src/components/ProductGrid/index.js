import React, { useContext } from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby'
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons'
import StoreContext from '~/context/StoreContext';
import { Grid } from './styles';
import { Img } from '~/utils/styles';

const ProductGrid = () => {
  const { store: { checkout } } = useContext(StoreContext);
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

  const url = (name, wrap = false) => `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`

  return (
    <Parallax ref={ref => ref} style={{ backgroundColor: '#20232f', zIndex: -1 }}>
      <ParallaxLayer offset={1} speed={1} style={{ backgroundColor: '#805E73', zIndex: -1 }} />
      <ParallaxLayer offset={1.9999} speed={1} style={{ backgroundColor: '#8FAD88', zIndex: -1 }} />
      <ParallaxLayer offset={2} speed={1} style={{ backgroundColor: '#87BCDE', zIndex: -1 }} />
      <ParallaxLayer offset={2.9999} speed={1} style={{ backgroundColor: '#87BCDE', zIndex: -1 }} />
      <ParallaxLayer offset={3} speed={1} style={{ backgroundColor: '#87BCDE', zIndex: -1 }} />
      <ParallaxLayer offset={3.9999} speed={1} style={{ backgroundColor: '#87BCDE', zIndex: -1 }} />
      <ParallaxLayer offset={4} speed={1} style={{ backgroundColor: '#87BCDE', zIndex: -1 }} />

      <ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.1 }}      >
        <img alt={"cloud"} src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '55%', zIndex: -1 }} />
        <img alt={"cloud"} src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '15%', zIndex: -1 }} />
      </ParallaxLayer>

      <ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: 0.1 }}>
        <img alt={"cloud"} src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '70%', zIndex: -1 }} />
        <img alt={"cloud"} src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '40%', zIndex: -1 }} />
      </ParallaxLayer>

      <ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.2 }}>
        <img alt={"cloud"} src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '10%', zIndex: -1 }} />
        <img alt={"cloud"} src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '75%', zIndex: -1 }} />
      </ParallaxLayer>

      <ParallaxLayer offset={1.6} speed={-0.1} style={{ opacity: 0.4 }}>
        <img alt={"cloud"} src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '60%', zIndex: -1 }} />
        <img alt={"cloud"} src={url('cloud')} style={{ display: 'block', width: '25%', marginLeft: '30%', zIndex: -1 }} />
        <img alt={"cloud"} src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '80%', zIndex: -1 }} />
      </ParallaxLayer>

      <ParallaxLayer offset={2.6} speed={0.4} style={{ opacity: 0.6 }}>
        <img alt={"cloud"} src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '5%', zIndex: -1 }} />
        <img alt={"cloud"} src={url('cloud')} style={{ display: 'block', width: '15%', marginLeft: '75%', zIndex: -1 }} />
      </ParallaxLayer>

      <ParallaxLayer offset={0} speed={0} factor={3} style={{ backgroundImage: url('stars', true), backgroundSize: 'cover', zIndex: -1 }} />

      {/* <ParallaxLayer offset={2.7} speed={-0.4} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none', }}>
        <img alt={"cloud"} src={url('earth')} style={{ width: '60%' }} />
      </ParallaxLayer> */}
      {
        allShopifyCollection.group.map(({ nodes: [{ title, products }] }) => {
          return <>
            {title !== "Home page"
              ?
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: '400px',
                  backgroundSize: '80%',
                  backgroundPosition: 'center',
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
              {products.map(({ handle, images: [image] }) => {
                return (
                  <Link to={`/product/${handle}`}>
                    {image !== undefined
                      ? <Img
                        fluid={image.localFile.childImageSharp.fluid}
                        alt={handle}
                        fadeIn={true}
                      />
                      : <img
                        alt={"no picture available"}
                        src={"https://via.placeholder.com/900"} />
                    }
                  </Link>
                )
              })}
            </Grid>
          </>
        })
      }
    </Parallax >
  )
}

export default ProductGrid
