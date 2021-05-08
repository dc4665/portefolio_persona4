import React, { useState, useEffect } from 'react'
import MenuButton from './MenuButton'
import './MainMenu.min.css'

function MainMenu() {
    //console.log(global.language);
    let [language, setLanguage] = useState('en');

    /* Menu States */
    let [menu1, setMenu1] = useState('Profil');
    let [menu2, setMenu2] = useState('Skills');
    let [menu3, setMenu3] = useState('Projects');
    let [menu4, setMenu4] = useState('Social Links');
    let [menu5, setMenu5] = useState('Contact');


    useEffect(() => {
        if(global.language === 'fr'){
            setLanguage('fr');
            setMenu1('Profil');
            setMenu2('Compétences');
            setMenu3('Projets');
            setMenu4('Réseaux Sociaux');
            setMenu5('Contact');
        } else if(global.language === 'ja') {
            setLanguage('jp');
            setMenu1('プロフィール');
            setMenu2('スキル');
            setMenu3('プロジェクト');
            setMenu4('SNS');
            setMenu5('お問い合わせ');
        }
    }, [language])

    return (
        <>
            <MenuButton name={menu1}/>
            <MenuButton name={menu2}/>
            <MenuButton name={menu3}/>
            <MenuButton name={menu4}/>
            <MenuButton name={menu5} />
        </>
    )
}

export default MainMenu
