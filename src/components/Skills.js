import React, { useState } from 'react'
import ColorBand2 from './ColorBand2'
import SkillsMenu from './SkillsMenu'
import './Skills.min.css'
import { SkillMenuContext } from '../contexts/SkillMenuContext'


function Skills() {
    const [currentSkill, setCurrentSkill ] = useState();


    return (
        <SkillMenuContext.Provider value={{currentSkill, setCurrentSkill}}>
            <div id="skills-page">
                <ColorBand2 />
            
                <div id="skills-menu">
                    <SkillsMenu />
                </div>          
            </div>
        </SkillMenuContext.Provider>
    )
}

export default Skills
