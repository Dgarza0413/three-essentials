import React from 'react'
import { Link, graphql, useStaticQuery } from "gatsby"
import Layout from '../components/layout';

// const Products = ({ data }) => {
const Products = () => {
    // console.log(data)
    const data = useStaticQuery(
        graphql`
        query{
    allShopifyProduct(sort: {
            fields: [createdAt]
            order: DESC
          }) {
      edges {
        node {
          title
          description
          handle
          priceRange{
              minVariantPrice{
                  amount
              }
          }
        }
      }
    }
        }
`)
    console.log(data)
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

// export const query = graphql`
//   {
//     allShopifyProduct(sort: { fields: [title] }) {
//       edges {
//         node {
//           title
//           shopifyId
//           description
//         }
//       }
//     }
//   }
// `