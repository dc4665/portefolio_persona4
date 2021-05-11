import React, { useState } from 'react'
import { SkillMenuContext } from '../contexts/SkillMenuContext'
import ColorBand2 from './ColorBand2'
import SkillsMenu from './SkillsMenu'
import SkillsLogo from './SkillsLogo'
import './Skills.min.css'


function Skills() {
    const [currentSkill, setCurrentSkill ] = useState("HTML - CSS3 - SASS");


    return (
        <SkillMenuContext.Provider value={{currentSkill, setCurrentSkill}}>
            <div id="skills-page">
                <ColorBand2 />
            
                <div id="skills-menu">
                    <SkillsMenu />
                </div>

                <SkillsLogo />          
            </div>
        </SkillMenuContext.Provider>
    )
}

export default Skills
