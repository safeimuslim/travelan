/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Navigation from "./my-navigation"
import Footer from "./my-footer"
import "../styles/css/w3.css"
import "../styles/css/font-awesome.min.css"
import "../styles/css/my.css"
import 'fullcalendar-reactwrapper/dist/css/fullcalendar.min.css'

const Layout = ({ children }) => (
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
      <div className="w3-light-grey">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </div>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
