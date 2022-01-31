import React from "react"
import "./css/theme.css"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"

// theme component
const Theme = () => {
    return (
        <div className="container">
        <li className="nav-link-item">
            <Link to="/blog" className="nav-link-text">
            <FontAwesomeIcon icon={faGithub} />
            </Link>
        </li>
        </div>
    )
}

export default Theme