/*
 * @Date: 2020-07-07 15:05:31
 * @LastEditTime: 2020-07-07 22:03:32
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Image = ({ imgkey }) => {
  const data = useStaticQuery(graphql`
    query {
      frend0: file(relativePath: { eq: "frend0.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      frend1: file(relativePath: { eq: "frend1.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      frend2: file(relativePath: { eq: "frend2.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      frend3: file(relativePath: { eq: "frend3.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      frend4: file(relativePath: { eq: "frend4.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      frend5: file(relativePath: { eq: "frend5.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      frend6: file(relativePath: { eq: "frend6.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      frend7: file(relativePath: { eq: "frend7.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      frend8: file(relativePath: { eq: "frend8.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      frend9: file(relativePath: { eq: "frend9.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      frend10: file(relativePath: { eq: "frend10.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }

      frend11: file(relativePath: { eq: "frend11.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      frend12: file(relativePath: { eq: "frend12.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      frend13: file(relativePath: { eq: "frend13.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      frend14: file(relativePath: { eq: "frend14.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      frend15: file(relativePath: { eq: "frend15.png" }) {
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
