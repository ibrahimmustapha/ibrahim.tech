import * as React from "react"
import Layout from "../components/layout"
import SearchEngineOptimization from "../components/seo"

const About = () => {
    return (
        <Layout pageTitle="Mustapha Ibrahim's Blog">
            <SearchEngineOptimization title="About"/>    
            <p><mark>Lorem ipsum dolor sit amet,</mark> consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        </Layout>
    )
}

export default About