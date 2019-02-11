import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import Helmet from 'react-helmet'

import Transition from '../components/transition'
import Header from "../components/header"
import { Container } from "../framework"
import "./layout.css"


const Layout = ({ children, location }) => (
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
        <Helmet>
          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.1/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous" />
          <link href="https://fonts.googleapis.com/css?family=Fira+Mono" rel="stylesheet"/>
          <script async src="https://snack.expo.io/embed.js"></script>
        </Helmet>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            margin: `0 auto`,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
          }}
        >
          <Transition location={location}>
            <Container>
              <main>{children}</main>
            </Container>
          </Transition>
          <footer>
            © {new Date().getFullYear()} distantbluesoftware
          </footer>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
