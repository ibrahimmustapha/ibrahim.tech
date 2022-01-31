import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import {
container,
heading,
navLinks,
navLinkItem,    
navLinkText,
footerStyle,
} from "./css/layout.module.css"


const Layout = ({ pageTitle, children }) => {
    const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

    return (
      <div>
          <div className={container}>
            <title>{data.site.siteMetadata.title}</title>
            <h2 className={heading}>{pageTitle}</h2>
            <nav>
                <ul className={navLinks}>
                <li className={navLinkItem}><Link to="/" className={navLinkText}>home</Link></li>
                <li className={navLinkItem}><Link to="/about" className={navLinkText}>about</Link></li>
                <li className={navLinkItem}><Link to="/blog" className={navLinkText}>blog</Link></li>
                </ul>
            </nav>
            <main>
                {children}
            </main>
        </div>
        <footer className={footerStyle}>
            ©2022 Ibrahim's Tech Blog.
        </footer>
      </div>
    )
}

export default Layout