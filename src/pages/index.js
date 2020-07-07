/*
 * @Date: 2020-07-06 15:32:00
 * @LastEditTime: 2020-07-07 11:00:24
 */ 
import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import MainImg from "../components/images/MainImg"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="首页" />
    <div>
      <MainImg />
    </div>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)

export default IndexPage
