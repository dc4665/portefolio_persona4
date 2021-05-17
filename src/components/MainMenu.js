import React, { useState } from 'react'
import MenuButton from './MenuButton'
import './MainMenu.min.css'


function MainMenu() {

    /* Menu States */
    let [menu1] = useState('Profile');
    let [menu2] = useState('Skills');
    let [menu3] = useState('Projects');
    let [menu4] = useState('Contact');


    return (
        <>
            <MenuButton name={menu1}/>
            <MenuButton name={menu2}/>
            <MenuButton name={menu3}/>
            <MenuButton name={menu4}/>
        </>
    )
}

export default MainMenu
