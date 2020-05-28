import React from "react";
import 'twin.macro';

import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const Image = () => {
  const data = useStaticQuery(graphql`
  query{
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
    <div tw='grid grid-cols-4'>
      {data.allImageSharp.edges.map((e, i) => {
        return (
          <>
            <Img tw='
            sm:w-48 grid-cols-4
            md:w-32 grid-cols-4 
            lg:w-48 grid-cols-4
            ' fluid={e.node.fluid} />
          </>
        )
      })}
    </div>
  )
}
export default Image
