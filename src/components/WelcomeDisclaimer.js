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
                        <h2>Bienvenu sur le portfolio de Dai</h2>
                    </div>

                    <div>
                        <h3>Attention</h3>
                        <p>
                            Certains effets sur ce site peuvent être dangereux pour les personnes épileptiques.
                        </p>
                        <p>
                            Ce site n’est accessible que sur ordinateur et n’est pas encore totalement optimisé pour le responsive. 
                        </p>
                    </div>

                    <div>
                        <h3>Quel est le concept de ce portfolio?</h3>
                        <p>
                            Ce portfolio est inspiré par l’UI du célèbre jeu vidéo “<a href="https://fr.wikipedia.org/wiki/Shin_Megami_Tensei:_Persona_4">Persona 4</a>” d’Atlus. 
                        </p>
                    </div>

                    <div>
                        <h3>
                            Pourquoi avoir fait un portfolio comme ça?
                        </h3>
                        <ul>
                            <li>
                                J’aime les jeux vidéos en général et la série “Persona”.
                            </li>
                            <li>
                                Je voulais créer un portfolio avec un design et un concept inhabituel (pour un site portfolio du moins!).
                            </li>
                            <li>
                                La série “Persona” est connue pour avoir une identité graphique et des UI recherchées. Je voulais m’imposer cette identité graphique forte comme contrainte pour cet exercice.
                            </li>
                            <li>
                                Je voulais tout simplement créer un projet original pour apprendre et utiliser React.
                            </li>
                        </ul>
                    </div>

                    <div className="btn-close-container">
                        <button className="btn-close" onClick={closeWelcome}>
                            Visiter Mon Portfolio
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
                        <h2>ダイのポートフォリオサイトへようこそ</h2>
                    </div>

                    <div>
                        <h3>注意</h3>
                        <p>
                            このサイトで使用している効果の中には光過敏性発作をお持ちの方にとって危険となるものがあります。
                        </p>
                        <p>
                            このサイトはデスクトップPCでのみご利用頂けます。小さな画面ではまだ完全なレスポンシブ対応ではありません。
                        </p>
                    </div>

                    <div>
                        <h3>ポートフォリオのコンセプト</h3>
                        <p>
                            アトラスの『<a href="https://ja.wikipedia.org/wiki/%E3%83%9A%E3%83%AB%E3%82%BD%E3%83%8A4">ペルソナ４</a>』のUIに着想を得て、このポートフォリオを制作しました。
                        </p>
                    </div>

                    <div>
                        <h3>
                            このポートフォリオを制作した理由
                        </h3>
                        <ul>
                            <li>
                                ゲーム全般、『ペルソナ』シリーズが大好きだったので。
                            </li>
                            <li>
                                珍しいデザインとコンセプト（少なくともポートフォリオサイトとしては！）を作ってみたいと思いました。
                            </li>
                            <li>
                                『ペルソナ』シリーズは、印象的なグラフィックと洗練されたUIで知られています。その強いビジュアルアイデンティティを再現してみようと思いました。
                            </li>
                            <li>
                                ただ、Reactを勉強して実践する場としてこのプロジェクトを始めました。
                            </li>
                        </ul>
                    </div>

                    <div className="btn-close-container">
                        <button className="btn-close" onClick={closeWelcome}>
                            ポートフォリオへ
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
                        <h2>Welcome on Dai’s portfolio</h2>
                    </div>

                    <div>
                        <h3>Warning</h3>
                        <p>
                            Some effects on this website can be bad for people with epilepsy.
                        </p>
                        <p>
                            This website is only accessible by Desktop, and is not yet totally optimized to be responsive. 
                        </p>
                    </div>

                    <div>
                        <h3>What is the concept of this portfolio?</h3>
                        <p>
                            This portfolio is inspired by the UI of the famous video game “<a href="https://en.wikipedia.org/wiki/Persona_4">Persona 4</a>” by Atlus.
                        </p>
                    </div>

                    <div>
                        <h3>
                            Why did I make my portfolio like that ?
                        </h3>
                        <ul>
                            <li>
                                I love video games in general and love the “Persona” series.
                            </li>
                            <li>
                                I wanted to create a portfolio with an unusual concept and design (at least for a portfolio website!)
                            </li>
                            <li>
                                The Persona series is well-known for its stylish design and UI. For this project, I wanted to have as a constraint its visual identity. 
                            </li>
                            <li>
                                Simply put, I wanted to create an original project to learn and use React.
                            </li>
                        </ul>
                    </div>

                    <div className="btn-close-container">
                        <button className="btn-close" onClick={closeWelcome}>
                            Visit My Portfolio
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
                        <h2>Welcome on Dai’s portfolio</h2>
                    </div>

                    <div>
                        <h3>Warning</h3>
                        <p>
                            Some effects on this website can be bad for people with epilepsy.
                        </p>
                        <p>
                            This website is only accessible by Desktop, and is not yet totally optimized to be responsive. 
                        </p>
                    </div>

                    <div>
                        <h3>What is the concept of this portfolio?</h3>
                        <p>
                            This portfolio is inspired by the UI of the famous video game “<a href="https://en.wikipedia.org/wiki/Persona_4">Persona 4</a>” by Atlus.
                        </p>
                    </div>

                    <div>
                        <h3>
                            Why did I make my portfolio like that ?
                        </h3>
                        <ul>
                            <li>
                                I love video games in general and love the “Persona” series.
                            </li>
                            <li>
                                I wanted to create a portfolio with an unusual concept and design (at least for a portfolio website!)
                            </li>
                            <li>
                                The Persona series is well-known for its stylish design and UI. For this project, I wanted to have as a constraint its visual identity. 
                            </li>
                            <li>
                                Simply put, I wanted to create an original project to learn and use React.
                            </li>
                        </ul>
                    </div>

                    <div className="btn-close-container">
                        <button className="btn-close" onClick={closeWelcome}>
                            Visit My Portfolio
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default WelcomeDisclaimer
