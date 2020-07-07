/*
 * @Date: 2020-07-07 11:35:47
 * @LastEditTime: 2020-07-07 13:59:49
 */

import React from "react"
import IndexPart2Img from "../../components/images/IndexPart2Img"
const IndexPart2 = () => (
  <div className="index-part-2">
    <div className="index-part-2_item">
      <IndexPart2Img imgkey="secondIcon1" />
      <span className="index-part-2_title">互动营销</span>
    </div>
    <div className="index-part-2_item">
      <IndexPart2Img imgkey="secondIcon2" />
      <span className="index-part-2_title">积分兑换</span>
    </div>
    <div className="index-part-2_item">
      <IndexPart2Img imgkey="secondIcon3" />
      <span className="index-part-2_title">游戏化运营</span>
    </div>
    <div className="index-part-2_item">
      <IndexPart2Img imgkey="secondIcon4" />
      <span className="index-part-2_title">定制服务</span>
    </div>
  </div>
)

export default IndexPart2
