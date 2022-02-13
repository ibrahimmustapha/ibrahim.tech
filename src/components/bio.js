import React from "react"

const Education = () => {
    return (
        <div>
            <h2>Education</h2>
            <hr/>
            <ul>
            <li><b>University of Professional Studies, Accra</b> - IT Management</li>
            </ul>
        </div>
    )
}

const Stack = (props) => {
    return (
        <div>
            <h2>{props.tech}</h2>
            <hr/>
            <ul>
                <li>Node Js</li>
                <li>Express js</li>
                <li>React && React Native</li>
                <li>Java && Java Android</li>
                <li>Gatsby Js</li>
                <li>Git</li>
            </ul>
        </div>
    )
}

const Social = () => {
    return (
        <div>
        <h2>Socials</h2>
        <hr/>
        <ul>
        <li><b>Twitter</b> - <a href="https://twitter.com/codewithibrahim">codewithibrahim</a></li>
        </ul>
        </div>
    )
}

const Bio = () => {
    return (
        <div>
            <h2>Personal Information</h2>
            <hr/>
            <ul>
            <li><b>Ibrahim</b> is a self-taught software developer based in Ghana🇬🇭.</li>
            <li>He's a student at the University of Professional Studies - Accra studying Information Technology
               Management.</li> 
            <li>He enjoys writing and building software applications.</li> 
            <li>When he's not glued not glued to 
               a computer screen, he spends time playing watching football⚽ or basketball🏀 games.
            </li>
            </ul>
            <Education />
            <Stack tech="Technology"/>
            <Social />
        </div>
    )
}

export default Bio