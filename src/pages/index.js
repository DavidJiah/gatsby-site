/*
 * @Date: 2020-07-06 15:32:00
 * @LastEditTime: 2020-07-07 21:45:18
 */

import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import MainImg from "../components/images/MainImg"
import IndexPart2 from "./components/Index-part-2"
import IndexPart3 from "./components/Index-part-3"
import IndexPart4 from "./components/Index-part-4"
import IndexPart5 from "./components/Index-part-5"
import IndexPart6 from "./components/Index-part-6"

import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="首页" />
    <div>
      <MainImg />
    </div>
    <IndexPart2 />
    <IndexPart3 />
    <IndexPart4 />
    <IndexPart5 />
    <IndexPart6 />
  </Layout>
)

export default IndexPage
