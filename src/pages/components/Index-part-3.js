/*
 * @Date: 2020-07-07 13:59:20
 * @LastEditTime: 2020-07-07 17:34:26
 */

import React, { useState } from "react"
import IndexPart3MainImg from "../../components/images/IndexPart3MainImg"
import IndexPart3Img from "../../components/images/IndexPart3Img"

const IndexPart3 = () => {
  const [active, setActive] = useState(0)

  const toolBars = ["星权益", "星缴费", "星短信"]
  const footerImgs = [
    ["全品类", "一线资源", "海量资源", "无缝对接"],
    ["web", "app", "公众号", "小程序"],
    ["验证码", "系统通知", "营销推广", "推送补充"],
  ]
  return (
    <div className="index-part-3">
      <div className="index-part-3_tool-bar">
        {toolBars.map((item, index) => (
          <span
            key={item}
            onClick={() => setActive(index)}
            className={
              active === index
                ? "index-part-3_tool-item index-part-3_tool-item--active"
                : "index-part-3_tool-item"
            }
          >
            {item}
          </span>
        ))}
      </div>
      <div className="index-part-3_img-box">
        <IndexPart3MainImg imgKey={"thirdImg" + active} />
      </div>
      <div className="index-part-3_footer-img">
        {footerImgs[active].map((item, index) => (
          <span key={index} className="index-part-3_footer-img-item">
            <IndexPart3Img imgkey={`thirdFooterImg${active}${index}`} />
            <span className="index-part-3_footer-img-title">{item}</span>
          </span>
        ))}
      </div>
    </div>
  )
}

export default IndexPart3
