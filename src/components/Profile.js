import React, { useContext } from 'react'
import './Profile.min.css'
import { LanguageContext } from '../contexts/LanguageContext';

function Profile() {
    /* Setting Menu Languages */
    const {language} = useContext(LanguageContext);

    if(language === "fr-fr") {

        return (
            <div id="profile-page">
                <h2>Qui suis-je ?</h2>
                <p>
                    Je m’appelle Dai et suis un développeur web au parcours atypique habitant à Strasbourg. Après avoir étudié l’anglais et le japonais à l’université de Strasbourg, et obtenu un Master en science de l’éducation, je suis parti vivre au Japon pendant deux ans.
                </p> 
                <p>
                    Au Japon j’ai eu le plaisir de travailler à la “Tokyo One Piece Tower” dans le marketing, la communication et la traduction (le parc a malheureusement fermé définitivement ses portes à cause du coronavirus en 2020). J’ai ensuite travaillé comme enseignant de français et d’anglais en freelance.
                </p> 
                <p>
                    Ces deux années ont été pour moi une très belle expérience. J’ai pu non seulement m’améliorer en japonais, découvrir le marketing, l’enseignement, vivre dans une culture différente, mais aussi en apprendre beaucoup sur moi-même. C’est pourquoi j’ai décidé de revenir en France en 2019 afin d’entreprendre une reconversion professionnelle et devenir développeur web. J’ai entrepris cette reconversion en intégrant une formation continue à la CCI de Colmar, puis en rejoignant le CESI pour une formation en alternance.
                </p> 
                <p>
                    Je recherche à présent un emploi de développeur web qui me permette de monter en compétence tout en m’appuyant sur mes expériences précédentes.
                </p>
                <h2>Expériences Professionnelles</h2>
                <ul>
                    <div className="profile-bloc">
                        <ul>
                            <li className="profile-bloc-name">Développeur Informatique - Roederer (Alternance)</li>
                            <li className="profile-bloc-loc">Strasbourg</li>
                            <li className="profile-bloc-time">09/2020 - présent</li>
                        </ul>
                    </div>

                    <div className="profile-bloc">
                        <ul>
                            <li className="profile-bloc-name">Enseignant Freelance français et anglais</li>
                            <li className="profile-bloc-loc">Tokyo</li>
                            <li className="profile-bloc-time">2018</li>
                        </ul>
                    </div>

                    <div className="profile-bloc">
                        <ul>
                            <li className="profile-bloc-name">Staff International en Communication : Tokyo One Piece Tower</li>
                            <li className="profile-bloc-loc">Tokyo</li>
                            <li className="profile-bloc-time">2017</li>
                        </ul>
                    </div>

                    <div className="profile-bloc">
                        <ul>
                            <li className="profile-bloc-name">Professeur Stagiaire : Education Nationale</li>
                            <li className="profile-bloc-loc">Lyon / Strasbourg</li>
                            <li className="profile-bloc-time">2014 - 2016</li>
                        </ul>
                    </div>

                    <div className="profile-bloc">
                        <ul>
                            <li className="profile-bloc-name">Rédacteur - Traducteur: Japoninfos.com</li>
                            <li className="profile-bloc-loc">Travail à distance</li>
                            <li className="profile-bloc-time">2013 - 2016</li>
                        </ul>
                    </div>
                </ul>

                <h2>Formation</h2>
                <ul>
                    <div className="profile-bloc">
                        <ul>
                            <li className="profile-bloc-name">Bac + 3 Responsable en ingénierie des logiciels</li>
                            <li className="profile-bloc-loc">CESI - Strasbourg</li>
                            <li className="profile-bloc-time">09/2020 - 09/2021</li>
                        </ul>
                    </div>

                    <div className="profile-bloc">
                        <ul>
                            <li className="profile-bloc-name">Bac + 2 Développeur intégrateur web PHP orienté objet</li>
                            <li className="profile-bloc-loc">CCI - Colmar</li>
                            <li className="profile-bloc-time">10/2019 - 07/2020</li>
                        </ul>
                    </div>

                    <div className="profile-bloc">
                        <ul>
                            <li className="profile-bloc-name">Master 2 MEEF - Métier de l’enseignement</li>
                            <li className="profile-bloc-loc">ESPE Lyon/Strasbourg </li>
                            <li className="profile-bloc-time">2014 - 2016</li>
                        </ul>
                    </div>

                    <div className="profile-bloc">
                        <ul>
                            <li className="profile-bloc-name">Licence 2 LLCE Japonais</li>
                            <li className="profile-bloc-loc">Université de Strasbourg</li>
                            <li className="profile-bloc-time">2012 - 2014</li>
                        </ul>
                    </div>

                    <div className="profile-bloc">
                        <ul>
                            <li className="profile-bloc-name">Licence 3 LLCE Anglais</li>
                            <li className="profile-bloc-loc">Université de Strasbourg</li>
                            <li className="profile-bloc-time">2009 - 2012</li>
                        </ul>
                    </div>
                </ul>
            </div>
        )
    } 
    else if (language === "ja") 
    {
        return (
            <div id="profile-page">
                <h2>自己紹介</h2>
                <p>
                    こんにちは！ダイです。フランスのストラスブール在住のWebデベロッパーで、ちょっと変わった経歴の持ち主です。ストラスブール大学で英文学と日本語を学び、大学院では教育学を修めました。その後、二年間、東京で働きました
                </p> 
                <p>
                    東京では「東京ワンピースタワー」のマーケティングチームで、翻訳やPRのお手伝いをする機会がありました。（本当に残念なことにコロナの影響で、2020年に閉館してしまいました）その後、フリーランスのフランス語・英語教師として働きました。
                </p> 
                <p>
                    この二年間は私にとってかけがえのない経験となりました。日本語を上達させ、マーケティングや異文化での生活、さらに自分自身にについても多くを学びました。だからこそ、キャリアを変えるため、2019年にフランスに戻ることにしたのです。まず、コルマールのCCIでWeb開発を勉強し、さらにアルテルナンス（インターンシップみたいなもの）をしながらCESIに通うことから始めました。
                </p> 
                <p>
                    現在は、これまでの経験を活かしながら、スキルアップを測れるようなウェブ開発の仕事を探しています。
                </p>
                <h2>職歴</h2>
                <ul>
                    <div className="profile-bloc">
                        <ul>
                            <li className="profile-bloc-name">ITデベロッパー - Roederer(アルテルナンス)</li>
                            <li className="profile-bloc-loc">ストラスブール</li>
                            <li className="profile-bloc-time">2020年9月 - 現在</li>
                        </ul>
                    </div>

                    <div className="profile-bloc">
                        <ul>
                            <li className="profile-bloc-name">フリーランス仏語・英語教師</li>
                            <li className="profile-bloc-loc">東京</li>
                            <li className="profile-bloc-time">2018年</li>
                        </ul>
                    </div>

                    <div className="profile-bloc">
                        <ul>
                            <li className="profile-bloc-name">東京ワンピースタワー広報 インターナショナルスタッフ</li>
                            <li className="profile-bloc-loc">東京</li>
                            <li className="profile-bloc-time">2017年</li>
                        </ul>
                    </div>

                    <div className="profile-bloc">
                        <ul>
                            <li className="profile-bloc-name">教師(研修生) : Education Nationale</li>
                            <li className="profile-bloc-loc">リヨン/ストラスブール</li>
                            <li className="profile-bloc-time">2014年-2016年</li>
                        </ul>
                    </div>

                    <div className="profile-bloc">
                        <ul>
                            <li className="profile-bloc-name">ライター - 翻訳 - Japoninfos.com</li>
                            <li className="profile-bloc-loc">テレワーク</li>
                            <li className="profile-bloc-time">2013年-2016年</li>
                        </ul>
                    </div>
                </ul>

                <h2>学歴</h2>
                <ul>
                    <div className="profile-bloc">
                        <ul>
                            <li className="profile-bloc-name">Bac + 3 Software Engineering</li>
                            <li className="profile-bloc-loc">CESI - ストラスブール</li>
                            <li className="profile-bloc-time">2020年9月-2021年9月</li>
                        </ul>
                    </div>

                    <div className="profile-bloc">
                        <ul>
                            <li className="profile-bloc-name">Bac + 2 Web Development</li>
                            <li className="profile-bloc-loc">CCI - コルマール</li>
                            <li className="profile-bloc-time">2019年10月 - 2020年7月</li>
                        </ul>
                    </div>

                    <div className="profile-bloc">
                        <ul>
                            <li className="profile-bloc-name">Master 2 教育学科</li>
                            <li className="profile-bloc-loc">ESPE リヨン/ストラスブール大学大学院</li>
                            <li className="profile-bloc-time">2014年- 2016年</li>
                        </ul>
                    </div>

                    <div className="profile-bloc">
                        <ul>
                            <li className="profile-bloc-name">日本文学科</li>
                            <li className="profile-bloc-loc">ストラスブール大学</li>
                            <li className="profile-bloc-time">2012年- 2014年</li>
                        </ul>
                    </div>

                    <div className="profile-bloc">
                        <ul>
                            <li className="profile-bloc-name">英文学科</li>
                            <li className="profile-bloc-loc">ストラスブール大学</li>
                            <li className="profile-bloc-time">2009年- 2012年</li>
                        </ul>
                    </div>
                </ul>
            </div>
        );
    } 
    else if (language === "en-us")
    {
        return (
            <div id="profile-page">
                <h2>Who am I ?</h2>
                <p>
                    Hello my name is Dai, and I’m a web developer living in Strasbourg with a kind of unusual background. I studied English and Japanese at the Strasbourg University, and got a Master degree in education and teaching. After that I went to Japan, lived and worked there for two years. 
                </p> 
                <p>
                    In Japan I had the opportunity to work in the marketing team of the “Tokyo One Piece Tower” doing translation and assisting in PR (the parc unfortunately closed in 2020 due to coronavirus). After that I worked as a freelance French and English teacher.
                </p> 
                <p>
                    Those two years were for me an unforgettable experience. I could improve my Japanese language skills, learn about marketing, life in another culture, and I also learnt a lot about myself. That is why I’ve decided to come back to France in 2019 to change my career. I’ve started this change of career by studying web development at the Colmar CCI, and then by joining the CESI while doing an internship. 
                </p> 
                <p>
                    Currently I’m looking for a web developer job where I can level up my skills while taking advantage of my previous work experiences. 
                </p>
                <h2>Work Experiences</h2>
                <ul>
                    <div className="profile-bloc">
                        <ul>
                            <li className="profile-bloc-name">IT Developer - Roederer (Internship)</li>
                            <li className="profile-bloc-loc">Strasbourg</li>
                            <li className="profile-bloc-time">9/2020 - now</li>
                        </ul>
                    </div>

                    <div className="profile-bloc">
                        <ul>
                            <li className="profile-bloc-name">Freelance French and English Teacher</li>
                            <li className="profile-bloc-loc">Tokyo</li>
                            <li className="profile-bloc-time">2018</li>
                        </ul>
                    </div>

                    <div className="profile-bloc">
                        <ul>
                            <li className="profile-bloc-name">International Staff in PR - Tokyo One Piece Tower</li>
                            <li className="profile-bloc-loc">Tokyo</li>
                            <li className="profile-bloc-time">2017</li>
                        </ul>
                    </div>

                    <div className="profile-bloc">
                        <ul>
                            <li className="profile-bloc-name">Intern Teacher - Education Nationale</li>
                            <li className="profile-bloc-loc">Lyon / Strasbourg</li>
                            <li className="profile-bloc-time">2014-2016</li>
                        </ul>
                    </div>

                    <div className="profile-bloc">
                        <ul>
                            <li className="profile-bloc-name">Redactor - Translator - Japoninfos.com</li>
                            <li className="profile-bloc-loc">Remote work</li>
                            <li className="profile-bloc-time">2013-2016</li>
                        </ul>
                    </div>
                </ul>

                <h2>Education</h2>
                <ul>
                    <div className="profile-bloc">
                        <ul>
                            <li className="profile-bloc-name">Bac + 3 Software Engineering</li>
                            <li className="profile-bloc-loc">CESI - Strasbourg</li>
                            <li className="profile-bloc-time">09/2020 - 09/2021</li>
                        </ul>
                    </div>

                    <div className="profile-bloc">
                        <ul>
                            <li className="profile-bloc-name">Bac + 2 Web Development</li>
                            <li className="profile-bloc-loc">CCI - Colmar</li>
                            <li className="profile-bloc-time">10/2019 - 07/2020</li>
                        </ul>
                    </div>

                    <div className="profile-bloc">
                        <ul>
                            <li className="profile-bloc-name">Master 2 MEEF - Teaching and Education</li>
                            <li className="profile-bloc-loc">ESPE Lyon/Strasbourg </li>
                            <li className="profile-bloc-time">2014 - 2016</li>
                        </ul>
                    </div>

                    <div className="profile-bloc">
                        <ul>
                            <li className="profile-bloc-name">Bachelor in Japanese</li>
                            <li className="profile-bloc-loc">University of Strasbourg</li>
                            <li className="profile-bloc-time">2012 - 2014</li>
                        </ul>
                    </div>

                    <div className="profile-bloc">
                        <ul>
                            <li className="profile-bloc-name">Bachelor in English</li>
                            <li className="profile-bloc-loc">University of Strasbourg</li>
                            <li className="profile-bloc-time">2009 - 2012</li>
                        </ul>
                    </div>
                </ul>
            </div>
        )
    }
    else 
    {
        return (
            <div id="profile-page">
                <h2>Who am I ?</h2>
                <p>
                    Hello my name is Dai, and I’m a web developer living in Strasbourg with a kind of unusual background. I studied English and Japanese at the Strasbourg University, and got a Master degree in education and teaching. After that I went to Japan, lived and worked there for two years. 
                </p> 
                <p>
                    In Japan I had the opportunity to work in the marketing team of the “Tokyo One Piece Tower” doing translation and assisting in PR (the parc unfortunately closed in 2020 due to coronavirus). After that I worked as a freelance French and English teacher.
                </p> 
                <p>
                    Those two years were for me an unforgettable experience. I could improve my Japanese language skills, learn about marketing, life in another culture, and I also learnt a lot about myself. That is why I’ve decided to come back to France in 2019 to change my career. I’ve started this change of career by studying web development at the Colmar CCI, and then by joining the CESI while doing an internship. 
                </p> 
                <p>
                    Currently I’m looking for a web developer job where I can level up my skills while taking advantage of my previous work experiences. 
                </p>
                <h2>Work Experiences</h2>
                <ul>
                    <div className="profile-bloc">
                        <ul>
                            <li className="profile-bloc-name">IT Developer - Roederer (Internship)</li>
                            <li className="profile-bloc-loc">Strasbourg</li>
                            <li className="profile-bloc-time">9/2020 - now</li>
                        </ul>
                    </div>

                    <div className="profile-bloc">
                        <ul>
                            <li className="profile-bloc-name">Freelance French and English Teacher</li>
                            <li className="profile-bloc-loc">Tokyo</li>
                            <li className="profile-bloc-time">2018</li>
                        </ul>
                    </div>

                    <div className="profile-bloc">
                        <ul>
                            <li className="profile-bloc-name">International Staff in PR - Tokyo One Piece Tower</li>
                            <li className="profile-bloc-loc">Tokyo</li>
                            <li className="profile-bloc-time">2017</li>
                        </ul>
                    </div>

                    <div className="profile-bloc">
                        <ul>
                            <li className="profile-bloc-name">Intern Teacher - Education Nationale</li>
                            <li className="profile-bloc-loc">Lyon / Strasbourg</li>
                            <li className="profile-bloc-time">2014-2016</li>
                        </ul>
                    </div>

                    <div className="profile-bloc">
                        <ul>
                            <li className="profile-bloc-name">Redactor - Translator - Japoninfos.com</li>
                            <li className="profile-bloc-loc">Remote work</li>
                            <li className="profile-bloc-time">2013-2016</li>
                        </ul>
                    </div>
                </ul>

                <h2>Education</h2>
                <ul>
                    <div className="profile-bloc">
                        <ul>
                            <li className="profile-bloc-name">Bac + 3 Software Engineering</li>
                            <li className="profile-bloc-loc">CESI - Strasbourg</li>
                            <li className="profile-bloc-time">09/2020 - 09/2021</li>
                        </ul>
                    </div>

                    <div className="profile-bloc">
                        <ul>
                            <li className="profile-bloc-name">Bac + 2 Web Development</li>
                            <li className="profile-bloc-loc">CCI - Colmar</li>
                            <li className="profile-bloc-time">10/2019 - 07/2020</li>
                        </ul>
                    </div>

                    <div className="profile-bloc">
                        <ul>
                            <li className="profile-bloc-name">Master 2 MEEF - Teaching and Education</li>
                            <li className="profile-bloc-loc">ESPE Lyon/Strasbourg </li>
                            <li className="profile-bloc-time">2014 - 2016</li>
                        </ul>
                    </div>

                    <div className="profile-bloc">
                        <ul>
                            <li className="profile-bloc-name">Bachelor in Japanese</li>
                            <li className="profile-bloc-loc">University of Strasbourg</li>
                            <li className="profile-bloc-time">2012 - 2014</li>
                        </ul>
                    </div>

                    <div className="profile-bloc">
                        <ul>
                            <li className="profile-bloc-name">Bachelor in English</li>
                            <li className="profile-bloc-loc">University of Strasbourg</li>
                            <li className="profile-bloc-time">2009 - 2012</li>
                        </ul>
                    </div>
                </ul>
            </div>
        )
    }
}

export default Profile
