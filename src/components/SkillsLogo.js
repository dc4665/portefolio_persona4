import React, { useContext } from 'react'
import './SkillsLogo.min.css'
import { SkillMenuContext } from '../contexts/SkillMenuContext'
import HtmlCssSass from './HtmlCssSass';
import Javascript from './Javascript';
import Node from './Node';
import PhpWordpress from './PhpWordpress';
import PhotoshopFigma from './PhotoshopFigma';

function SkillsLogo() {
    const currentSkill = useContext(SkillMenuContext);

    function renderSkills(currentSkill) {

        switch(currentSkill.currentSkill){
            case "HTML - CSS3 - SASS":
                return <HtmlCssSass />
            
            case "Javascript - React":
                return <Javascript />

            case "MongoDB - Express - Node":
                return <Node />

            case "PHP - MySQL - Wordpress":
                return <PhpWordpress />

            case "Photoshop - Figma":
                return <PhotoshopFigma />

            default:
                return <p>Default Skill</p>    
        }
    }

    return (
        <div className="skills-container">
            {renderSkills(currentSkill)}
        </div>
    )
}

export default SkillsLogo
