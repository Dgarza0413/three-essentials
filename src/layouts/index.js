import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import styled from '@emotion/styled'

import ContextProvider from '~/provider/ContextProvider'
import { GlobalStyle } from '~/utils/styles'
import Navigation from '~/components/Navigation'

const Wrapper = styled.div`
  // height: 1000px;
  // margin: 0 auto;
  // max-width: 960px;
  // padding: 0px 1.0875rem 1.45rem;
`
const Footer = styled.footer`
  height: 100px;
`
const Layout = ({ children }) => {
  return (
    <ContextProvider>
      <GlobalStyle />
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={data => (
          <>
            <Wrapper>
              <Navigation siteTitle={data.site.siteMetadata.title} />
              {children}
              {/* <Footer>Something</Footer> */}
            </Wrapper>
          </>
        )}
      />
    </ContextProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
