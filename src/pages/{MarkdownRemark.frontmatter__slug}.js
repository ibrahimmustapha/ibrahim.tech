import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import {
dateLinkSpan,
dateLink,
avatarStyle,
authorContainer,
authorDetails,
blogImage,
} from "../styles/blog.module.css"

const Template = ({ data }) => {
    const { markdownRemark } = data // holds post data
    const { frontmatter, html } = markdownRemark
    const image = getImage(frontmatter.hero_image)
    return (
      <Layout pageTitle="Welcome to my blog">
        <div className="blog-post-container">
        <div className="blog-post">
          <h1>{frontmatter.title}</h1>
          <hr/>
          <div className={authorContainer}>
            <StaticImage className={avatarStyle} src="./mee.jpg" alt="avatar" />
            <div className={authorDetails}>
            <h3>{frontmatter.author}</h3>
            <p className={dateLink}>Published on <span className={dateLinkSpan}>{frontmatter.date}</span></p>
            </div>
          </div>
          <hr/>
          <GatsbyImage className={blogImage} image={image} alt={frontmatter.hero_image_alt}/>
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
        author
        github
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