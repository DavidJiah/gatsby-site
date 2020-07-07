/*
 * @Date: 2020-07-07 11:02:03
 * @LastEditTime: 2020-07-07 11:02:48
 */

import React from "react"

const Footer = () => {
  return (
    <footer>
      <span className="footer-item">
        湖南云金数科信息技术有限公司 © {new Date().getFullYear()}
      </span>
      <span className="footer-item">yunjinshuke.com ALL RIGHTS RESERVED</span>
      <span className="footer-item">湘ICP备19002984号</span>
    </footer>
  )
}

export default Footer
