import React, { useContext } from 'react';
import './SkillsLogo.min.css';
import { SkillMenuContext } from '../contexts/SkillMenuContext';
import { LanguageContext } from '../contexts/LanguageContext';
import HtmlCssSass from './HtmlCssSass';
import Javascript from './Javascript';
import Node from './Node';
import PhpWordpress from './PhpWordpress';
import PhotoshopFigma from './PhotoshopFigma';
import Ci from './Ci';
import Languages from './Languages';

function SkillsLogo() {
    /* Setting Menu Languages */
    const {language} = useContext(LanguageContext);

    const currentSkill = useContext(SkillMenuContext);

    function renderSkills(currentSkill) {

        switch(currentSkill.currentSkill){
            case "HTML - CSS3 - SASS":
                return <HtmlCssSass />
            
            case "Javascript - React - GSAP":
                return <Javascript />

            case "MongoDB - Express - Node":
                return <Node />

            case "PHP - MySQL - Wordpress":
                return <PhpWordpress />

            case "Photoshop - Figma":
                return <PhotoshopFigma />

            case "Git - Docker":
                return <Ci />

            case "Languages":
                return <Languages />

            default:
                return <p>Default Skill</p>    
        }
    }

    function renderSkillsDescription(currentSkill) {

        if(language === "fr-fr") {
            switch(currentSkill.currentSkill){
                case "HTML - CSS3 - SASS":
                    return "La base de tout développement Web :). J’ai commencé à m’intéresser de plus en plus aux animations en CSS et au framework d’animation GSAP. Autrement je travaille en général avec SASS."
                
                case "Javascript - React - GSAP":
                    return "J’adore travailler avec ce langage et souhaiterais me spécialiser dessus. Pour le moment je cherche à monter en compétence sur le framework React."
    
                case "MongoDB - Express - Node":
                    return "Bien que j’adore React, je suis encore nouveau sur le MERN stack, mais j’ai hâte de construire de super applications avec ces technologies!"
    
                case "PHP - MySQL - Wordpress":
                    return "J’ai beaucoup travaillé avec PHP pour étudier le pattern MVC. Autrement j’aime beaucoup le CMS Wordpress et le couple souvent avec le plugin ACF."
    
                case "Photoshop - Figma":
                    return "J’ai les bases sur Photoshop et Illustrator. J’utilise Figma pour le maquettage. J’ai également des bases en photographie avec reflex."
                
                case "Git - Docker":
                    return "J’utilise Git pour versionner mes projets. Je suis encore débutant sur Docker mais l’utilise pour créer des environnements de développement pour mes projets."
                
                case "Languages":
                    return "Je suis natif français. J’ai obtenu une licence d’anglais et même si j’ai appris le “RP English” je ne parle pas comme la Reine. Le japonais est la chose la plus difficile que j’ai apprise à part l’informatique, je suis très fier de mon JLPT N2 ! Autrement je parle vietnamien avec ma maman :)."

                default:
                    return <p>Default Skill</p>    
            }
        }
        else if (language === "ja") {
            switch(currentSkill.currentSkill){
                case "HTML - CSS3 - SASS":
                    return "Web開発の基本ですね:) 最近、CSSアニメーションやGSAPのアニメーションフレームワークにも興味を持ち始めました。通常はSASSで作業しています。"
                
                case "Javascript - React - GSAP":
                    return "Reactが大好きで、スペシャリストになりたいと思っています。最近はReactにかなり集中していて、もっとスキルを高めたいと思っています。"
    
                case "MongoDB - Express - Node":
                    return "Reactは大好きですが、MERNスタックはまだ初心者です。でも、いつかこれらの技術を使って超クールなアプリを作りたいと思っています！"
    
                case "PHP - MySQL - Wordpress":
                    return "MVCパターンを勉強するために、PHPをよく使っていました。他にもCMSのWordpressが好きで、ACFプラグインと一緒によく使っています。"
    
                case "Photoshop - Figma":
                    return "PhotoshopとIllustratorの基本的な機能は使えます。デザインカンプにはFigmaをよく利用します。レフ版を使用するような写真撮影の基本的なスキルも持っています。"
                
                case "Git - Docker":
                    return "プロジェクトのバージョン管理にGitを使用しています。Dockerに関してはまだ初心者ですが、自分のプロジェクトの開発環境を作るために使っています。"
                
                case "Languages":
                    return "フランス語のネイティブです。ビジネスレベルの英語を話せます。（RP、クイーンズ・イングリッシュです）。日本語は一番難しかったけど、日本に行く前にJLPT N2に合格しました両親とはベトナム語で話しています。"

                default:
                    return <p>Default Skill</p>    
            }
        }
        else if (language === "en-us") {
            switch(currentSkill.currentSkill){
                case "HTML - CSS3 - SASS":
                    return "The base of all web development :). I’m getting more and more interested in animation with CSS and the animation framework GSAP. Otherwise I usually work with SASS."
                
                case "Javascript - React - GSAP":
                    return "I love working with this language and wish to be an expert in it. Currently i’m really digging into React and wish to level up my skill in it."
    
                case "MongoDB - Express - Node":
                    return "Even if I love React, I’m kind of new to the MERN stack. However I’m looking forward to create cool applications with those technologies!"
    
                case "PHP - MySQL - Wordpress":
                    return "I worked a lot with PHP to study the MVC pattern at the time. Otherwise, I love the Wordpress CMS and often use it with the ACF plugin."
    
                case "Photoshop - Figma":
                    return "I have the basics down for Photoshop and Illustrator. I use figma for my mockups. I also have some basics on taking pictures with a reflex."
                
                case "Git - Docker":
                    return "I’m using Git to control version my projects. I’m still a beginner on docker, but I am using it to create development environments for my work. "
                
                case "Languages":
                    return "I’m a French native speaker. I got a bachelor degree in English and even if I learnt the RP I do not speak like the Queen. Japanese is the most difficult thing I’ve learnt aside from programming, I am very proud of my JLPT N2 ! Otherwise I speak Vietnamese with my mom :)."

                default:
                    return <p>Default Skill</p>    
            }
        }
        else {
            switch(currentSkill.currentSkill){
                case "HTML - CSS3 - SASS":
                    return "The base of all web development :). I’m getting more and more interested in animation with CSS and the animation framework GSAP. Otherwise I usually work with SASS."
                
                case "Javascript - React - GSAP":
                    return "I love working with this language and wish to be an expert in it. Currently i’m really digging into React and wish to level up my skill in it."
    
                case "MongoDB - Express - Node":
                    return "Even if I love React, I’m kind of new to the MERN stack. However I’m looking forward to create cool applications with those technologies!"
    
                case "PHP - MySQL - Wordpress":
                    return "I worked a lot with PHP to study the MVC pattern at the time. Otherwise, I love the Wordpress CMS and often use it with the ACF plugin."
    
                case "Photoshop - Figma":
                    return "I have the basics down for Photoshop and Illustrator. I use figma for my mockups. I also have some basics on taking pictures with a reflex."
                
                case "Git - Docker":
                    return "I’m using Git to control version my projects. I’m still a beginner on docker, but I am using it to create development environments for my work. "
                
                case "Languages":
                    return "I’m a French native speaker. I got a bachelor degree in English and even if I learnt the RP I do not speak like the Queen. Japanese is the most difficult thing I’ve learnt aside from programming, I am very proud of my JLPT N2 ! Otherwise I speak Vietnamese with my mom :)."

                default:
                    return <p>Default Skill</p>    
            }
        }
    }

    return (
        <>
            <div className="skills-container">
                {renderSkills(currentSkill)}
            </div>

            <div className="skills-description-container">
                <h2>Info</h2>
                <p>{renderSkillsDescription(currentSkill)}</p>
            </div>
        </>
    )
}

export default SkillsLogo
