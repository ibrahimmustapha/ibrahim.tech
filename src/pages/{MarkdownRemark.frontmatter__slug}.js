import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Layout from "../components/layout"

const Template = ({ data }) => {
    const { markdownRemark } = data // holds post data
    const { frontmatter, html } = markdownRemark
    const image = getImage(frontmatter.hero_image)
    return (
      <Layout pageTitle="Welcome to my blog">
        <div className="blog-post-container">
        <div className="blog-post">
          <h2>{frontmatter.title}</h2>
          <GatsbyImage image={image} alt={frontmatter.hero_image_alt}/>
          <p>{frontmatter.date}</p>
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>
        </Layout>
    )
}

export const pageQuery = graphql`
query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
        description
        hero_image_alt
        hero_image {
            childImageSharp {
                gatsbyImageData
            }
        }
      }
    }
  }
`

export default Template