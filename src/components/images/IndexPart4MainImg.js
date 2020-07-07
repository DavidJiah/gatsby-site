/*
 * @Date: 2020-07-07 15:05:31
 * @LastEditTime: 2020-07-07 17:40:09
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Image = ({ imgkey }) => {
  
  const data = useStaticQuery(graphql`
    query {
      FourthMainImg0: file(relativePath: { eq: "FourthMainImg0.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      FourthMainImg1: file(relativePath: { eq: "FourthMainImg1.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      FourthMainImg2: file(relativePath: { eq: "FourthMainImg2.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      FourthMainImg3: file(relativePath: { eq: "FourthMainImg3.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }

      FourthMainImg4: file(relativePath: { eq: "FourthMainImg4.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      FourthMainImg5: file(relativePath: { eq: "FourthMainImg5.png" }) {
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
