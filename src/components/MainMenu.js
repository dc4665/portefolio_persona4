import React, { useState, useContext, useEffect } from 'react'
import MenuButton from './MenuButton'
import './MainMenu.min.css'
import { LanguageContext } from '../contexts/LanguageContext';



function MainMenu() {
    /* Setting Menu Languages */
    const {language} = useContext(LanguageContext);

    /* We use those variables to set the menu name */
    const [menu1Name, setMenu1Name] = useState();
    const [menu2Name, setMenu2Name] = useState();
    const [menu3Name, setMenu3Name] = useState();
    const [menu4Name, setMenu4Name] = useState();

    useEffect(() => {
        if(language === "fr-fr") {
            setMenu1Name("Profile");
            setMenu2Name("Compétences");
            setMenu3Name("Projets");
            setMenu4Name("Me Contacter");
        } else if(language === "ja") {
            setMenu1Name("プロフィール");
            setMenu2Name("スキル");
            setMenu3Name("プロジェクト");
            setMenu4Name("お問い合わせ");
        } else if(language === "en-us"){
            setMenu1Name("Profile");
            setMenu2Name("Skills");
            setMenu3Name("Projects");
            setMenu4Name("Contact");
        } else {
            setMenu1Name("Profile");
            setMenu2Name("Skills");
            setMenu3Name("Projects");
            setMenu4Name("Contact");
        }
    }, [language]);
    

    /* Menu States */
    let [menu1] = useState("Profile");
    let [menu2] = useState("Skills");
    let [menu3] = useState("Projects");
    let [menu4] = useState("Contact");


    return (
        <>
            <MenuButton value={menu1} name={menu1Name}/>
            <MenuButton value={menu2} name={menu2Name}/>
            <MenuButton value={menu3} name={menu3Name}/>
            <MenuButton value={menu4} name={menu4Name}/>
        </>
    )
}

export default MainMenu
