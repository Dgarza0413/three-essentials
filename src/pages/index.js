import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Subscriber from "../components/subscriber"

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
      <h1>3ssentials</h1>
      <p>There is much more in stock</p>
      <Subscriber />
      <p>Now go build something great.</p>
      {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}> */}
      <Image />
      {/* </div> */}
      <Link to="/page-2/">Go to page 2</Link>
    </Content>
  </Layout>
)

export default IndexPage
