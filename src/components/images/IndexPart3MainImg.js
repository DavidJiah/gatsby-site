/*
 * @Date: 2020-07-07 13:38:53
 * @LastEditTime: 2020-07-07 15:45:37
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Image = ({ imgKey }) => {
  const data = useStaticQuery(graphql`
    query {
      thirdImg0: file(relativePath: { eq: "third-img-1.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      thirdImg1: file(relativePath: { eq: "third-img-2.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      thirdImg2: file(relativePath: { eq: "third-img-3.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <Img fluid={data[imgKey].childImageSharp.fluid} />
}

export default Image
