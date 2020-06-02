import React from 'react'
import { Link, graphql, useStaticQuery } from "gatsby"

const Products = () => {
    const data = useStaticQuery(
        graphql`
        query {
            allShopifyProduct(sort: {fields: [createdAt] order: DESC}) {
            edges {
                node {
                shopifyId
                title
                description
                handle
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
            <ul>
                {data.allShopifyProduct.edges.map(({ node }) => (
                    <li key={node.shopifyId}>
                        <h3>
                            <Link to={`/product/${node.handle}`}>{node.title}</Link>
                            {" - "}${node.priceRange.minVariantPrice.amount}
                        </h3>
                        <p>{node.description}</p>
                    </li>
                ))}
            </ul>
        </>
    )
}
export default Products