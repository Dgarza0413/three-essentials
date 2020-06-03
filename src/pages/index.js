import React from "react"
import styled from "@emotion/styled"

import Layout from "../components/layout"
import Image from "../components/image"
import Products from "../components/products"
import SEO from "../components/seo"
import Subscriber from "../components/subscriber"

import 'twin.macro';

const Content = styled.div`
  text-align: center;
  margin-top: 10px;
  p {
    font-weight: bold;
  }
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Content>
      <div tw="
                h-64
                mb-16
                bg-blue-500
                rounded-md
              "
      >
        <h1>3ssentials</h1>
        <p>There is much more in stock</p>
      </div>

      {/* <Subscriber /> */}
      <Products />
      <Image />
    </Content>
  </Layout>
)

export default IndexPage
