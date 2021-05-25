import React, { useContext } from 'react'
import HeaderTitle from './HeaderTitle'
import Page from './Page'
import { MenuContext } from '../contexts/MenuContext'
import { LanguageContext } from '../contexts/LanguageContext'
import './SectionContainer.min.css'


function SectionContainer() {
    const {currentMenu} = useContext(MenuContext);
    const {language} = useContext(LanguageContext);

    let titleName = currentMenu;

    if(language === 'fr-fr') {
        switch(currentMenu) {
            case 'Profile':
                titleName = "Profile";
                break;
            case 'Skills':
                titleName = "Compétences";
                break;
            case 'Projects':
                titleName = "Projets";
                break;
            case 'Contact':
                titleName = "Contact";
                break;
            default:
                titleName = currentMenu;
        }
    } else if (language === 'ja') {
        switch(currentMenu) {
            case 'Profile':
                titleName = "プロフィール";
                break;
            case 'Skills':
                titleName = "スキル";
                break;
            case 'Projects':
                titleName = "プロジェクト";
                break;
            case 'Contact':
                titleName = "お問い合わせ";
                break;
            default:
                titleName = currentMenu;
        }
    } else if (language === 'en-us'){
        switch(currentMenu) {
            case 'Profile':
                titleName = "Profile";
                break;
            case 'Skills':
                titleName = "Skills";
                break;
            case 'Projects':
                titleName = "Projects";
                break;
            case 'Contact':
                titleName = "Contact Me";
                break;
            default:
                titleName = currentMenu;
        }
    }

    return (
        <section className="section-container">
            <div className="section-title">
                <HeaderTitle title={titleName}/>
            </div>
            <div className="section-article">
                <Page />
            </div>
        </section>
    )
}

export default SectionContainer
