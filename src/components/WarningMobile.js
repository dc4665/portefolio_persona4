import React, { useContext } from 'react'
import LanguagesMenu from './LanguagesMenu'
import { LanguageContext } from '../contexts/LanguageContext';
import './WarningMobile.min.css'

function WarningMobile() {
    const {language} = useContext(LanguageContext);

    if(language === "fr-fr") {
        return (
            <div className="warning-mobile">
                <LanguagesMenu />
                <div>
                    <h2>Attention</h2>
                </div>
                <div>
                    <p>Ce site n'est pas encore optimisé pour le mobile, désolé ! Veuillez consulter mon portefolio sur un ordinateur pour la meilleure expérience.</p>
                </div>
                <div>
                    <p>Dai</p>
                </div>
            </div>
        )
    }
    else if(language === "ja") {
        return (
            <div className="warning-mobile">
                <LanguagesMenu />
                <div>
                    <h2>注意</h2>
                </div>
                <div>
                    <p>Ce site n'est pas encore optimisé pour le mobile, désolé ! Veuillez consulter mon portefolio sur un ordinateur pour la meilleure expérience.</p>
                </div>
                <div>
                    <p>Dai</p>
                </div>
            </div>
        )
    }
    else if(language === "en-us") {
        return (
            <div className="warning-mobile">
                <LanguagesMenu />
                <div>
                    <h2>Warning</h2>
                </div>
                <div>
                    <p>Ce site n'est pas encore optimisé pour le mobile, désolé ! Veuillez consulter mon portefolio sur un ordinateur pour la meilleure expérience.</p>
                </div>
                <div>
                    <p>Dai</p>
                </div>
            </div>
        )
    }
    else {
        return (
            <div className="warning-mobile">
                <LanguagesMenu />
                <div>
                    <h2>Warning</h2>
                </div>
                <div>
                    <p>Ce site n'est pas encore optimisé pour le mobile, désolé ! Veuillez consulter mon portefolio sur un ordinateur pour la meilleure expérience.</p>
                </div>
                <div>
                    <p>Dai</p>
                </div>
            </div>
        )
    }
    
}

export default WarningMobile
