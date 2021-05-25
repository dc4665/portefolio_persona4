import React, { useContext } from 'react'
import './LanguagesMenu.min.css'
import { LanguageContext } from "../contexts/LanguageContext"

function LanguagesMenu() {
    const { setLanguage } = useContext(LanguageContext);
    const { language } = useContext(LanguageContext);

    if(language === "fr-fr") {
        return (
            <div className="btn-lang-container">
                <button id="fr-fr" className="btn-lang active-language" onClick={() => setLanguage("fr-fr")}>Fr</button>
                <button id="en-us" className="btn-lang" onClick={() => setLanguage("en-us")}>Eng</button>
                <button id="ja" className="btn-lang" onClick={() => setLanguage("ja")}>Jp</button>
            </div>
        )
    }
    else if(language === "ja") {
        return (
            <div className="btn-lang-container">
                <button id="fr-fr" className="btn-lang" onClick={() => setLanguage("fr-fr")}>Fr</button>
                <button id="en-us" className="btn-lang" onClick={() => setLanguage("en-us")}>Eng</button>
                <button id="ja" className="btn-lang active-language" onClick={() => setLanguage("ja")}>Jp</button>
            </div>
        )
    }
    else if(language === "en-us") {
        return (
            <div className="btn-lang-container">
                <button id="fr-fr" className="btn-lang" onClick={() => setLanguage("fr-fr")}>Fr</button>
                <button id="en-us" className="btn-lang active-language" onClick={() => setLanguage("en-us")}>Eng</button>
                <button id="ja" className="btn-lang" onClick={() => setLanguage("ja")}>Jp</button>
            </div>
        )
    }
    else {
        return (
            <div className="btn-lang-container">
                <button id="fr-fr" className="btn-lang" onClick={() => setLanguage("fr-fr")}>Fr</button>
                <button id="en-us" className="btn-lang active-language" onClick={() => setLanguage("en-us")}>Eng</button>
                <button id="ja" className="btn-lang" onClick={() => setLanguage("ja")}>Jp</button>
            </div>
        )
    }
}

export default LanguagesMenu