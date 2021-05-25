import React from 'react'
import './Projects.min.css'
import TV from './TV'

function Projects() {
    /* Setting up project identification here. Create an object with a "name property", this name will be used in the ProjectScreen.js component to identify in a switch statement the project to display */
    const hackMyBodyProjet = {
        name: "hackMyBody"
    }

    return (
        <div id="projects-page">
            <TV name={hackMyBodyProjet.name}/>
            <TV name={2}/>
            <TV name={3}/>
            <TV name={4}/>
        </div>
    )
}

export default Projects
