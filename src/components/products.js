import React from 'react'
import { Link, graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import "twin.macro"


const Products = () => {
    const data = useStaticQuery(
        graphql`
        query {
            allShopifyProduct(sort: {fields: [createdAt] order: DESC}) {
            edges {
                node {
                shopifyId
                title
                handle
                description
                images {
                        localFile {
                            childImageSharp {
                                fluid(maxWidth: 200, maxHeight: 200){
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                priceRange {
                        minVariantPrice{
                            amount
                        }
                    }
                }
            }
        }
    }
`)


    return (
        <>
            <h1>Products</h1>
            <div tw="grid grid-cols-4">
                {data.allShopifyProduct.edges.map(({ node }) => {
                    return (
                        <div
                            tw="sm:w-48 grid-cols-4
                                lg:w-48 grid-cols-4"
                            key={node.shopifyId}
                        >
                            <Link
                                to={`/product/${node.handle}`}
                                tw="rounded-lg">
                                <Img fluid={node.images[0].localFile.childImageSharp.fluid} />
                            </Link>
                        </div>
                    )
                }
                )}
            </div>
        </>
    )
}
export default Products