import React from "react"
import { Link } from "gatsby"

// post component
const PostLink = ({ post }) => (
    <div>
    <article>
    <h2>
      <Link to={post.frontmatter.slug}>
      {post.frontmatter.title}
      </Link>
        </h2>
    <p>{post.frontmatter.date}</p>
    </article>
  </div>
)

export default PostLink