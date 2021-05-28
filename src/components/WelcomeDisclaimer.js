import React, { useContext } from 'react'
import LanguagesMenu from './LanguagesMenu';
import { LanguageContext } from '../contexts/LanguageContext';
import './WelcomeDisclaimer.min.css';

function WelcomeDisclaimer() {

    function closeWelcome() {
        document.getElementById('welcome').classList.add('welcomeIsClosed');

        setTimeout(() => {
            document.getElementById('welcome').style.display = "none";
        }, 2000)
    }

    const {language} = useContext(LanguageContext);

    if(language === "fr-fr") {
        return (
            <div id="welcome" className="welcomeOverlay">
                <div className="welcomeExplanation">
                    <LanguagesMenu />
                    <div>
                        <h2>Bienvenu Dai's Portefolio / Curriculum</h2>
                    </div>

                    <div>
                        <h3>Warning</h3>
                        <p>
                            Some effects on this website can be bad for people
                            with epileptia
                        </p>
                    </div>

                    <div>
                        <h3>What is this Portefolio ?</h3>
                        <p>
                            This portefolio is inspired by the famous japanese
                            video game Persona 4
                        </p>
                    </div>

                    <div>
                        <h3>
                            Why did you make a portefolio inspired by this game
                            ?
                        </h3>
                        <ul>
                            <li>
                                I love video games in general and obviously the
                                Persona series.
                            </li>
                            <li>
                                The Persona series (especially Persona 4 and
                                Persona 5) is acclaimed for its strong visual
                                identity and UI.
                            </li>
                            <li>
                                I wanted to make a portefolio that force me to
                                take an original visual guideline and adapt it
                                to create something new.
                            </li>
                            <li>
                                I wanted to build something on my own with React
                                to learn it.
                            </li>
                        </ul>
                    </div>

                    <div>
                        <p>This website is in French, English and Japanese.</p>
                    </div>

                    <div className="btn-close-container">
                        <button className="btn-close" onClick={closeWelcome}>
                            Visit My Portefolio
                        </button>
                    </div>
                </div>
            </div>
        );        
    }
    else if(language === "ja") {
        return (
            <div id="welcome" className="welcomeOverlay">
                <div className="welcomeExplanation">
                    <LanguagesMenu />
                    <div>
                        <h2>ようこそ Dai's Portefolio / Curriculum</h2>
                    </div>

                    <div>
                        <h3>Warning</h3>
                        <p>
                            Some effects on this website can be bad for people
                            with epileptia
                        </p>
                    </div>

                    <div>
                        <h3>What is this Portefolio ?</h3>
                        <p>
                            This portefolio is inspired by the famous japanese
                            video game Persona 4
                        </p>
                    </div>

                    <div>
                        <h3>
                            Why did you make a portefolio inspired by this game
                            ?
                        </h3>
                        <ul>
                            <li>
                                I love video games in general and obviously the
                                Persona series.
                            </li>
                            <li>
                                The Persona series (especially Persona 4 and
                                Persona 5) is acclaimed for its strong visual
                                identity and UI.
                            </li>
                            <li>
                                I wanted to make a portefolio that force me to
                                take an original visual guideline and adapt it
                                to create something new.
                            </li>
                            <li>
                                I wanted to build something on my own with React
                                to learn it.
                            </li>
                        </ul>
                    </div>

                    <div>
                        <p>This website is in French, English and Japanese.</p>
                    </div>

                    <div className="btn-close-container">
                        <button className="btn-close" onClick={closeWelcome}>
                            Visit My Portefolio
                        </button>
                    </div>
                </div>
            </div>
        );
    }
    else if(language === "en-us") {
        return (
            <div id="welcome" className="welcomeOverlay">
                <div className="welcomeExplanation">
                    <LanguagesMenu />
                    <div>
                        <h2>Welcome Dai's Portefolio / Curriculum</h2>
                    </div>

                    <div>
                        <h3>Warning</h3>
                        <p>
                            Some effects on this website can be bad for people
                            with epileptia
                        </p>
                    </div>

                    <div>
                        <h3>What is this Portefolio ?</h3>
                        <p>
                            This portefolio is inspired by the famous japanese
                            video game Persona 4
                        </p>
                    </div>

                    <div>
                        <h3>
                            Why did you make a portefolio inspired by this game
                            ?
                        </h3>
                        <ul>
                            <li>
                                I love video games in general and obviously the
                                Persona series.
                            </li>
                            <li>
                                The Persona series (especially Persona 4 and
                                Persona 5) is acclaimed for its strong visual
                                identity and UI.
                            </li>
                            <li>
                                I wanted to make a portefolio that force me to
                                take an original visual guideline and adapt it
                                to create something new.
                            </li>
                            <li>
                                I wanted to build something on my own with React
                                to learn it.
                            </li>
                        </ul>
                    </div>

                    <div>
                        <p>This website is in French, English and Japanese.</p>
                    </div>

                    <div className="btn-close-container">
                        <button className="btn-close" onClick={closeWelcome}>
                            Visit My Portefolio
                        </button>
                    </div>
                </div>
            </div>
        );
    }
    else {
        return (
            <div id="welcome" className="welcomeOverlay">
                <div className="welcomeExplanation">
                    <LanguagesMenu />
                    <div>
                        <h2>Welcome Dai's Portefolio / Curriculum</h2>
                    </div>

                    <div>
                        <h3>Warning</h3>
                        <p>
                            Some effects on this website can be bad for people
                            with epileptia
                        </p>
                    </div>

                    <div>
                        <h3>What is this Portefolio ?</h3>
                        <p>
                            This portefolio is inspired by the famous japanese
                            video game Persona 4
                        </p>
                    </div>

                    <div>
                        <h3>
                            Why did you make a portefolio inspired by this game
                            ?
                        </h3>
                        <ul>
                            <li>
                                I love video games in general and obviously the
                                Persona series.
                            </li>
                            <li>
                                The Persona series (especially Persona 4 and
                                Persona 5) is acclaimed for its strong visual
                                identity and UI.
                            </li>
                            <li>
                                I wanted to make a portefolio that force me to
                                take an original visual guideline and adapt it
                                to create something new.
                            </li>
                            <li>
                                I wanted to build something on my own with React
                                to learn it.
                            </li>
                        </ul>
                    </div>

                    <div>
                        <p>This website is in French, English and Japanese.</p>
                    </div>

                    <div className="btn-close-container">
                        <button className="btn-close" onClick={closeWelcome}>
                            Visit My Portefolio
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default WelcomeDisclaimer
