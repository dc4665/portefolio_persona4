import React, { useState, useEffect } from 'react'
import MenuButton from './MenuButton'
import './MainMenu.min.css'


function MainMenu() {

    /* Menu States */
    let [menu1, setMenu1] = useState('Profile');
    let [menu2, setMenu2] = useState('Skills');
    let [menu3, setMenu3] = useState('Projects');
    let [menu4, setMenu4] = useState('Social Links');
    let [menu5, setMenu5] = useState('Contact');


    return (
        <>
            <MenuButton name={menu1} isSelected={false}/>
            <MenuButton name={menu2}/>
            <MenuButton name={menu3}/>
            <MenuButton name={menu4}/>
            <MenuButton name={menu5} />
        </>
    )
}

export default MainMenu
