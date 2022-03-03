import React from "react"
import { graphql } from "gatsby"

const Tags = ({ posts }) => {
    // const tags = node.frontmatter.tags || [];
    return (
        <div>
            <ul>
                <li>Hello, World</li>
            </ul>
        </div>
    )
}

export const query = graphql`
  {
    allMarkdownRemark {
      group(field: frontmatter___tags) {
        tag: fieldValue
        edges {
          node {
            frontmatter {
              tags
            }
          }
        }
      }
    }
  }
`

export default Tags