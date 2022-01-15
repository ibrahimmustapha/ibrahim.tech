import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons"
import "./css/font-icons.module.css"

const Icons = () => {
    return (
        <div>
            <FontAwesomeIcon icon={faGithub} />
            <FontAwesomeIcon icon={faTwitter} />
        </div>
    )
}

export default Icons