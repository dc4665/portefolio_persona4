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

    function renderSkillsDescription(currentSkill) {
        switch(currentSkill.currentSkill){
            case "HTML - CSS3 - SASS":
                return "HTML/CSS is pretty cool ! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis officia qui beatae ad optio cumque ducimus expedita neque temporibus voluptates?"
            
            case "Javascript - React":
                return "Javascript is pretty cool ! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis officia qui beatae ad optio cumque ducimus expedita neque temporibus voluptates?"

            case "MongoDB - Express - Node":
                return "MongoDB is pretty cool ! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis officia qui beatae ad optio cumque ducimus expedita neque temporibus voluptates?"

            case "PHP - MySQL - Wordpress":
                return "PHP is pretty cool ! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis officia qui beatae ad optio cumque ducimus expedita neque temporibus voluptates?"

            case "Photoshop - Figma":
                return "Figma is pretty cool ! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis officia qui beatae ad optio cumque ducimus expedita neque temporibus voluptates?"

            default:
                return <p>Default Skill</p>    
        }
    }

    return (
        <>
            <div className="skills-container">
                {renderSkills(currentSkill)}
            </div>

            <div className="skills-description-container">
                <h2>Info</h2>
                <p>{renderSkillsDescription(currentSkill)}</p>
            </div>
        </>
    )
}

export default SkillsLogo
