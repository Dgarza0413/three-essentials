import React, { useState } from 'react'
import { Link, graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import "twin.macro"


const Products = () => {
    const handleClick = () => {
        console.log('handle click')
    }

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
            <div tw="grid grid-cols-4">
                {/* <div tw="flex flex-wrap -mb-4"> */}
                {data.allShopifyProduct.edges.map(({ node }) => {
                    return (
                        <div
                            tw="sm:w-24 grid-cols-4
                            md:w-48 grid-cols-4 
                            lg:w-64 grid-cols-4"
                            key={node.shopifyId}
                            onClick={handleClick}
                        >
                            <Link to={`/product/${node.handle}`}>
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