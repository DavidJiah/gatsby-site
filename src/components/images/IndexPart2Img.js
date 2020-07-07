/*
 * @Date: 2020-07-07 13:38:53
 * @LastEditTime: 2020-07-07 13:57:06
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Image = ({ imgkey }) => {
  const data = useStaticQuery(graphql`
    query {
      secondIcon1: file(relativePath: { eq: "second-icon1.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      secondIcon2: file(relativePath: { eq: "second-icon2.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      secondIcon3: file(relativePath: { eq: "second-icon3.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      secondIcon4: file(relativePath: { eq: "second-icon4.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <Img fluid={data[imgkey].childImageSharp.fluid} />
}

export default Image
