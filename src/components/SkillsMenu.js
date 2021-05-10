import React, { useState } from 'react'
import MenuButtonSkill from './MenuButtonSkill'

function SkillsMenu() {
    /* Menu States */
    let [menuSkill1, setMenuSkill1] = useState('HTML - CSS3 - SASS');
    let [menuSkill2, setMenuSkill2] = useState('Javascript - React');
    let [menuSkill3, setMenuSkill3] = useState('MongoDB - Express - Node');
    let [menuSkill4, setMenuSkill4] = useState('PHP - MySQL - Wordpress');
    let [menuSkill5, setMenuSkill5] = useState('Photoshop - Figma');
    
    

    return (
        <>
            <MenuButtonSkill name={menuSkill1}/>
            <MenuButtonSkill name={menuSkill2}/>
            <MenuButtonSkill name={menuSkill3}/>
            <MenuButtonSkill name={menuSkill4}/>
            <MenuButtonSkill name={menuSkill5}/>
        </>
    )
}

export default SkillsMenu
