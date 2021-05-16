import React from 'react'
import './Projects.min.css'
import TV from './TV'

function Projects() {

    return (
        <div id="projects-page">
            <TV name={1}/>
            <TV name={2}/>
            <TV name={3}/>
            <TV name={4}/>
        </div>
    )
}

export default Projects
