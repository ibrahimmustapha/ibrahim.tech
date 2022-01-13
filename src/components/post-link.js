import React from "react"
import { Link } from "gatsby"
import {
container,
navLink,
blogDate,
description,
readMe
} from "./post.module.css"
// post component
const PostLink = ({ post }) => (
    <div>
    <article className={container}>
    <h2>
      <Link className={navLink} to={post.frontmatter.slug}>
      {post.frontmatter.title}
      </Link>
        </h2>
    <p className={blogDate}>Published on {post.frontmatter.date}</p>
    <p className={description}>{post.frontmatter.description}</p>
    <p>
    <Link className={readMe} to={post.frontmatter.slug}>
        Read more
    </Link>
    </p>
    </article>
  </div>
)

export default PostLink