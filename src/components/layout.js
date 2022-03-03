import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons"
import {
container,
heading,
navLinks,
navLinkItem,    
navLinkText,
footerStyle,
iconContainer,
iconStyle,
iconLink,
} from "./css/layout.module.css"
import "../styles/global.css"

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
            <div className={heading}>{pageTitle}</div>
            <nav>
                <ul className={navLinks}>
                <li className={navLinkItem}><Link to="/" className={navLinkText}>home</Link></li>
                <li className={navLinkItem}><Link to="/blog" className={navLinkText}>blog</Link></li>
                </ul>
            </nav>
            <main>
                {children}
            </main>
        </div>
        <footer className={footerStyle}>
            ©2022 Ibrahim's Tech Blog.
          <div className={iconContainer}>
          <Link to="https://github.com/ibrahimmustapha" className={iconLink}><FontAwesomeIcon className={iconStyle} icon={faGithub} /></Link>
          <Link to="https://twitter.com/codewithibrahim" className={iconLink}><FontAwesomeIcon className={iconStyle} icon={faTwitter} /></Link>
          </div>
        </footer>
      </div>
    )
}

export default Layout