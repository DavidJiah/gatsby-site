/*
 * @Date: 2020-07-07 21:44:31
 * @LastEditTime: 2020-07-07 22:05:27
 */

import React from "react"
import IndexPart6Img from "../../components/images/IndexPart6Img"

const IndexPart6 = () => (
  <div className="index-part-6">
    <span className="index-part-6_title">
      部分合作<span style={{ color: "#0088FF" }}>伙伴</span>
    </span>
    <div className="index-part-6_logo-panel">
      {Array(16)
        .fill("")
        .map((item, index) => (
          <div className="index-part-6_logo-item" key={index}>
            <IndexPart6Img imgkey={`frend${index}`} />
          </div>
        ))}
    </div>
  </div>
)

export default IndexPart6
