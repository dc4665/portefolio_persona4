import React from 'react'
import './ProjectScreen.min.css'

function ProjectScreen(props) {
    let activated = props.isVisible;

    return (
        <div className={`${activated ? "dark-overlay" : ""}`}>
            <div className={`project-screen ${activated ? "active" : ""}`}>
                <div className="project-container">
                    <div className="project-image">
                        Project{props.name}
                    </div>
                    <div className="project-description">
                        Description
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectScreen
