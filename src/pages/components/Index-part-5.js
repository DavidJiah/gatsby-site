/*
 * @Date: 2020-07-07 21:02:48
 * @LastEditTime: 2020-07-07 21:37:52
 */

import React from "react"
import IndexPart5Img from "../../components/images/IndexPart5Img"

const IndexPart5 = () => {
  const list = [
    {
      title: "品牌沉淀",
      subTitle:
        '十年从业经验的专业团队 深挖行业价值,打造"星"系 品牌为国内企业赋能',
    },
    {
      title: "合作伙伴",
      subTitle:
        "合作伙伴涵盖国内众多互 联网平台和知名企业,如阿 里巴巴,腾讯芒果TV等等",
    },
    {
      title: "专业化营销服务",
      subTitle:
        "为机构提供商户招商洽谈 签约,业务实施,对账,开票 结算的全流程外包服务",
    },
    {
      title: "售后服务",
      subTitle: "提供7X24h客服服务确保 及时有效的解决客户疑惑 提高用户满意度",
    },
  ]

  return (
    <div className="index-part-5">
      <span className="index-part-5_title">
        我们的<span style={{ color: "#0088FF" }}>优势</span>
      </span>
      {/* <div></div>
      <div></div>
      <div></div>
      <div></div> */}
      <div className="index-part-5_img-box">
        {list.map((item, index) => (
          <div className="index-part-5_img-item">
            <div style={{ width: "50%", margin: "auto" }}>
              <IndexPart5Img imgkey={`fifthFooterImg${index}`} />
            </div>
            <div className="index-part-5_img-title">{item.title}</div>
            <span className="index-part-5_img-suTitle">{item.subTitle}</span>
            <div className={`index-part-5_img-item-line--${index}`}></div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default IndexPart5
