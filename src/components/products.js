import React from 'react'
import { Link, graphql } from "gatsby"
import Layout from '../components/layout';

const Products = () => {
    const data = graphql`{
    allShopifyProduct(sort: { fields: [title] }) {
      edges {
        node {
          title
          shopifyId
          description
        }
      }
    }
  }
`
    return (
        <Layout>
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
        </Layout>
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
//           handle
//           priceRange {
//             minVariantPrice {
//               amount
//             }
//           }
//         }
//       }
//     }
//   }
// `