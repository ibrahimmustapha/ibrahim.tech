import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import SearchEngineOptimization from "../components/seo"

// index component
const IndexPage = ({ data }) => {
  return (
    <Layout pageTitle="Home">
      <SearchEngineOptimization title="Home"/>
      <StaticImage src="./images/code.png" alt="A kitten" />
      <p>A basic example website should demonstrate a specific 
        technology/plugin/technique to help other developers understand how to accomplish</p>
    </Layout>
  )
}

export default IndexPage
