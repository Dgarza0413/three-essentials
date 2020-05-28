import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"

import Layout from "../components/layout"
import Image from "../components/image"
import Products from "../components/products"
import SEO from "../components/seo"
import Subscriber from "../components/subscriber"

const Content = styled.div`
  text-align: center;
  margin-top: 10px;
  p {
    font-weight: bold;
  }
`

// const data = graphql`
// query {
//     allShopifyProduct {
//       edges {
//         node {
//           title
//           description
//         }
//       }
//     }
//   }
// `

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Content>
      <h1>3ssentials</h1>
      <p>There is much more in stock</p>
      <Subscriber />
      <Products />
      <p>Now go build something great.</p>
      <Image />
      <Link to="/page-2/">Go to page 2</Link>
    </Content>
  </Layout>
)

export default IndexPage
