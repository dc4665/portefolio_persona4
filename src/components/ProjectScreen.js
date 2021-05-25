import React, { useContext } from 'react'
import './ProjectScreen.min.css'
import { LanguageContext } from '../contexts/LanguageContext';

function ProjectScreen(props) {
    let activated = props.isVisible;

    /* Setting projects' descriptions Languages */
    const {language} = useContext(LanguageContext);

    function renderProjectDescription(projectName) {
        if(language === "fr-fr") {
            switch(projectName) {
                case "hackMyBody":
                    return "Hack My Body est un site super cool";
                default:
                    return "Projet inconnu"
            }
        }
        else if(language === "ja") {
            switch(projectName) {
                case "hackMyBody":
                    return "Hack My Body カッコイイサイトです";
                default:
                    return "プロジェクトを見つけらない"
            }
        }
        else if(language === "en-us") {
            switch(projectName) {
                case "hackMyBody":
                    return "Hack My Body is a cool website";
                default:
                    return "Project not found"
            }
        }
        else {
            switch(projectName) {
                case "hackMyBody":
                    return "Hack My Body is a cool website";
                default:
                    return "Project not found"
            }
        }
    }

    return (
        <div className={`${activated ? "dark-overlay" : ""}`}>
            <div className={`project-screen ${activated ? "active" : ""}`}>
                <div className="project-container">
                    <div className="project-image">
                        Project : {props.name}
                    </div>
                    <div className="project-description">
                        {renderProjectDescription(props.name)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectScreen
