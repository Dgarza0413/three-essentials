import React from "react"
import "twin.macro"

import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      allImageSharp {
        edges {
          node {
            id
            fluid(maxWidth: 200, maxHeight: 200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `)
  return (
    <div tw="grid grid-cols-4">
      {data.allImageSharp.edges.map((e, i) => {
        return (
          <>
            <Img
              tw="
            sm:w-48 grid-cols-4
            md:w-32 grid-cols-4 
            lg:w-48 grid-cols-4
            "
              fluid={e.node.fluid}
            />
          </>
        )
      })}
    </div>
  )
}
export default Image
