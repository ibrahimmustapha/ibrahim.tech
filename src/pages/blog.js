import React, { useState } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SearchEngineOptimization from "../components/seo"
import PostLink from "../components/post-list"


// search component
const SearchContent = ({
  data: {
      allMarkdownRemark: { edges },
    },
  }) => {
    const [ searchQuery, setSearchQuery ] = useState("")
    // filter post based on blog id && title
    const List = edges
      .filter(edge => !!edge.node.frontmatter.date) 
      .map(edge => <PostLink key={edge.node.id} post={edge.node} />)
  return (
    <Layout pageTitle="Mustapha Ibrahim's Blog">
      <SearchEngineOptimization title="Search"/>
      <form>
            <input 
            type="search" 
            placeholder="search blog here" 
            onChange={searchQuery}
            id="search"/>
        </form>
        <div> {List} </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
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
    }
  }
`

export default SearchContent