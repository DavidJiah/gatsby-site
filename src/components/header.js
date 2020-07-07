/*
 * @Date: 2020-07-06 15:32:00
 * @LastEditTime: 2020-07-07 11:11:10
 */

import PropTypes from "prop-types"
import React from "react"
import LogoImg from "../components/images/LogoImg"
import HamburgImg from "../components/images/HamburgImg"

const Header = ({ expand, setExpand }) => {
  return (
    <header className={expand && "header--expand"}>
      <div className="header-wrapper">
        <span style={{ display: "inline-block", width: "20px" }}></span>
        <LogoImg expand={expand} />
        <HamburgImg expand={expand} hamburgClick={() => setExpand(!expand)} />
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
