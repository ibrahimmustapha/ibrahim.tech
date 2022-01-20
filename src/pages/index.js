import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"

// index component
const IndexPage = () => {
  return (
    <Layout pageTitle="Welcome Home">
      <StaticImage src="./code.png" alt="A kitten" />
      <p>A basic example website should demonstrate a specific 
        technology/plugin/technique to help other developers understand how to accomplish</p>
    </Layout>
  )
}

export default IndexPage // export default component
