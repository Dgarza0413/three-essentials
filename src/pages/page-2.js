import React from 'react'
import { Link } from 'gatsby'
import AniLink from 'gatsby-plugin-transition-link/AniLink';

import SEO from '~/components/seo'

const SecondPage = () => (
  <>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    {/* <AniLink fade to="/">
      Fade to page 2
          </AniLink> */}
    <Link to="/">Go back to the homepage</Link>
  </>
)

export default SecondPage
