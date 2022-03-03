import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { StaticImage } from "gatsby-plugin-image"
import ReactDisqusComments from 'react-disqus-comments';
import Layout from "../components/layout"
import {
dateLinkSpan,
dateLink,
avatarStyle,
authorContainer,
authorDetails,
blogImage,
lineStyle,
authorName,
tagContainer,
tagStyle
} from "../styles/blog.module.css"
import SearchEngineOptimization from "../components/seo"

const Template = ({ data }) => {
    const { markdownRemark } = data // holds post data
    const { frontmatter, html } = markdownRemark
    const image = getImage(frontmatter.hero_image)
    const tag = frontmatter.tags
    const disqusShortname = "https-dreamy-swanson-87057a-netlify-app-blog"
    const disqusConfig = {
      identifier: data.markdownRemark.id,
      title: data.markdownRemark.frontmatter.title,
      url: 'https://dreamy-swanson-87057a.netlify.app/' + data.markdownRemark.frontmatter.slug,
    }
    return (
      <Layout pageTitle="Mustapha Ibrahim's Blog">
        <SearchEngineOptimization 
        title={frontmatter.title}
        description={frontmatter.description}
        image={frontmatter.image}/>

        <div className="blog-post-container">
        <div className="blog-post">
          <GatsbyImage className={blogImage} image={image} alt={frontmatter.hero_image_alt}/>
          <h1>{frontmatter.title}</h1>

          <div className={tagContainer}>
            {tag.map((items) => {
              return <div className={tagStyle}> {items} </div>
            })}
          </div>
          
          {/* Author's description */}
          <div className={authorContainer}>
            <StaticImage className={avatarStyle} src="./images/mee.jpg" alt="avatar" />
            <div className={authorDetails}>
            <div className={authorName}>{frontmatter.author}</div>
            <div>
            <div className={dateLink}><span className={dateLinkSpan}>{frontmatter.date} - @codewithibrahim</span></div>
            </div>
            </div>
          </div>

        {/* blog content */}
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>
      <hr className={lineStyle}/>
      <ReactDisqusComments shortname={disqusShortname} config={disqusConfig} />
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
      tags
      twitter
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