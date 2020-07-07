/*
 * @Date: 2020-07-07 09:48:02
 * @LastEditTime: 2020-07-07 10:52:49
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Image = ({ expand }) => {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fixed(width: 42) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      logoExpand: file(relativePath: { eq: "logo-expand.png" }) {
        childImageSharp {
          fixed(width: 42) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return <Img fixed={!expand ? data.logo.childImageSharp.fixed : data.logoExpand.childImageSharp.fixed} />
}

export default Image
