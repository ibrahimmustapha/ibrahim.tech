import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import "../components/css/search.module.css"
import {
navLink,
blogDate,
readMe,
headContainer,
mImage,
searchContainer,
descStyle,
readMeContainer,
} from "../components/css/post.module.css"

const PostLink = ({ post }) => {
    const image = getImage(post.frontmatter.hero_image)
    return (
        <div className={headContainer}>
        <GatsbyImage className={mImage} image={image} alt={post.frontmatter.hero_image_alt}/>
        <article className={searchContainer}>
        <h4>
          <Link className={navLink} to={post.frontmatter.slug}>
          {post.frontmatter.title}
          </Link>
            </h4>
        <p className={blogDate}>Published on {post.frontmatter.date}</p>
        <p className={descStyle}> {post.frontmatter.description} </p>
        <p>
        <div className={readMeContainer}>        
        <Link className={readMe} to={post.frontmatter.slug}>
        Read more
        </Link>
        </div>
        </p>
        </article>
        </div>
    )
}

export default PostLink