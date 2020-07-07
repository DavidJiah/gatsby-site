/*
 * @Date: 2020-07-07 15:05:31
 * @LastEditTime: 2020-07-07 15:45:07
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Image = ({ imgkey }) => {
  
  const data = useStaticQuery(graphql`
    query {
      thirdFooterImg00: file(relativePath: { eq: "thirdFooterImg00.png" }) {
        childImageSharp {
          fixed (width: 31, height: 31) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      thirdFooterImg01: file(relativePath: { eq: "thirdFooterImg01.png" }) {
        childImageSharp {
          fixed (width: 31, height: 31) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      thirdFooterImg02: file(relativePath: { eq: "thirdFooterImg02.png" }) {
        childImageSharp {
          fixed (width: 31, height: 31) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      thirdFooterImg03: file(relativePath: { eq: "thirdFooterImg03.png" }) {
        childImageSharp {
          fixed (width: 31, height: 31) {
            ...GatsbyImageSharpFixed
          }
        }
      }

      thirdFooterImg10: file(relativePath: { eq: "thirdFooterImg10.png" }) {
        childImageSharp {
          fixed (width: 31, height: 31) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      thirdFooterImg11: file(relativePath: { eq: "thirdFooterImg11.png" }) {
        childImageSharp {
          fixed (width: 31, height: 31) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      thirdFooterImg12: file(relativePath: { eq: "thirdFooterImg12.png" }) {
        childImageSharp {
          fixed (width: 31, height: 31) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      thirdFooterImg13: file(relativePath: { eq: "thirdFooterImg13.png" }) {
        childImageSharp {
          fixed (width: 31, height: 31) {
            ...GatsbyImageSharpFixed
          }
        }
      }

      thirdFooterImg20: file(relativePath: { eq: "thirdFooterImg20.png" }) {
        childImageSharp {
          fixed (width: 31, height: 31) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      thirdFooterImg21: file(relativePath: { eq: "thirdFooterImg21.png" }) {
        childImageSharp {
          fixed (width: 31, height: 31) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      thirdFooterImg22: file(relativePath: { eq: "thirdFooterImg22.png" }) {
        childImageSharp {
          fixed (width: 31, height: 31) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      thirdFooterImg23: file(relativePath: { eq: "thirdFooterImg23.png" }) {
        childImageSharp {
          fixed (width: 31, height: 31) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return <Img fixed={data[imgkey]?.childImageSharp?.fixed} />
}

export default Image
