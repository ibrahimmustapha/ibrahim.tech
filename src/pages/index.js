import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import SearchEngineOptimization from "../components/seo"
import Bio from "../components/bio"

// index component
const IndexPage = ({ data }) => {
  return (
    <Layout pageTitle="Mustapha Ibrahim's Blog">
      <SearchEngineOptimization title="Home"/>
      <StaticImage className="profile-image" src="./images/mee.jpg" alt="Ibrahim" />
      <Bio />
    </Layout>
  )
}

export default IndexPage
