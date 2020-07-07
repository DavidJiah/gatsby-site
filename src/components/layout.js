/*
 * @Date: 2020-07-06 15:32:00
 * @LastEditTime: 2020-07-07 11:20:00
 */

/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState } from "react"
import PropTypes from "prop-types"

import Header from "./Header"
import Footer from "./Footer"
import Menu from "./Menu"

const Layout = ({ children }) => {
  const [expand, setExpand] = useState(false)

  return (
    <>
      <Header expand={expand} setExpand={setExpand} />
      {!expand ? (
        <>
          <div>
            <main>{children}</main>
          </div>
          <Footer />
        </>
      ) : (
        <Menu />
      )}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
