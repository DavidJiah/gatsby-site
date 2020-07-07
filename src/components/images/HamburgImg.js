/*
 * @Date: 2020-07-07 10:02:49
 * @LastEditTime: 2020-07-07 10:37:52
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Image = ({ expand, hamburgClick }) => {
  const data = useStaticQuery(graphql`
    query {
      hamburg: file(relativePath: { eq: "hamburg.png" }) {
        childImageSharp {
          fixed(width: 20) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      hamburgExpand: file(relativePath: { eq: "hamburg-expand.png" }) {
        childImageSharp {
          fixed(width: 20) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <div className="hamburg-img" onClick={() => hamburgClick()}>
      <Img
        fixed={
          !expand
            ? data.hamburg.childImageSharp.fixed
            : data.hamburgExpand.childImageSharp.fixed
        }
      />
    </div>
  )
}

export default Image
