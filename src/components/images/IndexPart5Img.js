/*
 * @Date: 2020-07-07 15:05:31
 * @LastEditTime: 2020-07-07 22:03:41
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Image = ({ imgkey }) => {
  const data = useStaticQuery(graphql`
    query {
      fifthFooterImg0: file(relativePath: { eq: "fifthFooterImg0.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      fifthFooterImg1: file(relativePath: { eq: "fifthFooterImg1.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      fifthFooterImg2: file(relativePath: { eq: "fifthFooterImg2.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      fifthFooterImg3: file(relativePath: { eq: "fifthFooterImg3.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <Img fluid={data[imgkey]?.childImageSharp?.fluid} />
}

export default Image
