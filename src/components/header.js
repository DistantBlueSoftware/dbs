import Image from './image'
import PropTypes from "prop-types"
import React from "react"
import { Link } from 'gatsby'

import { StyledLink } from '../framework'

import styled from "styled-components"

const NavLinksContainer = styled.ul`
  display: flex;
  list-style-type: none;
  margin:0 10px;
`

const NavLink = styled.li`
  margin-right: 20px;
  margin-bottom: 0;
  a {
    text-decoration: none;
    color: inherit;
  }
`


const Header = ({ siteTitle }) => (
  <header
    style={{
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
        display: `flex`,
        alignItems: `center`,
        justifyContent: `space-between`
      }}
    >
      <h1 style={{ margin: 0, width: 50 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          <Image />
        </Link>
      </h1>
      <NavLinksContainer>
        <NavLink><StyledLink to='/about'>about</StyledLink></NavLink>
        <NavLink><StyledLink to='/projects'>projects</StyledLink></NavLink>
        {/* <NavLink><StyledLink to='/blog'>blog</StyledLink></NavLink> */}
        <NavLink><StyledLink to='/contact'>contact</StyledLink></NavLink>
      </NavLinksContainer>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
