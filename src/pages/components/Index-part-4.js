/*
 * @Date: 2020-07-07 17:34:10
 * @LastEditTime: 2020-07-07 22:42:06
 */

import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
// import "swiper/swiper.scss"
import IndexPart4MainImg from "../../components/images/IndexPart4MainImg"

const IndexPart4 = () => {
  const list = [
    {
      title: "积分兑换",
      subTitle:
        "搭建用户积分商城，定制积分兑换活动，助力实现营销闭环。小积分大价值，通过积分搭建用户成长体系。",
    },
    {
      title: "拉新促活",
      subTitle:
        "通过充值服务，内容营销，游戏化运营等手段提升用户体验，数据驱动，充分挖掘用户价值，助力企业持续盈利。",
    },
    {
      title: "流量变现",
      subTitle:
        "提供全品类虚拟商品、全套技术、客服支持，全渠道适配，灵活运营，快速实现企业业绩增长。",
    },
    {
      title: "品牌推广",
      subTitle:
        "品牌商通过卡券领取、分享、核销促进品牌推广，提升用户复购率，获得真实用户的数据沉淀。",
    },
    {
      title: "集采分销",
      subTitle:
        "拓展员工综合福利，严选优质福利商品及服务，满足企业集采需求，同时为中小企业提供营销场景输出能力。",
    },
    {
      title: "一物一码",
      subTitle:
        "将商品作为原生扫码入口，用户手机扫码进行商品溯源、参与领红包、抽奖等活动，与终端用户零距离互动。",
    },
  ]
  return (
    <div className="index-part-4">
      <span className="index-part-4_title">
        我们的<span style={{ color: "#0088FF" }}>服务</span>
      </span>
      <Swiper
        navigation
        slidesPerView={2}
        spaceBetween={5}
        centeredSlides={true}
        loop={true}
      >
        {list.map((item, index) => (
          <SwiperSlide key={index}>
            <div style={{ height: "250px" }}>
              <IndexPart4MainImg imgkey={`FourthMainImg${index}`} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default IndexPart4
