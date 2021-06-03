import React, { useContext } from 'react'
import './Page.min.css'
import { MenuContext } from '../contexts/MenuContext'

/* Below are the different Components representing the different pages */
import Profile from './Profile'
import Skills from './Skills'
import Projects from './Projects'
import Contact from './Contact'



function Page() {
    const currentMenu = useContext(MenuContext);

    function renderPage(currentMenu){

        switch(currentMenu.currentMenu) {
            case "Profile":
                return <Profile/>
            
            case "Skills":
                return <Skills />

            case "Projects":
                return <Projects/>

            case "Contact":
                return <Contact/>

            default:
                return <p>Default page</p>;
        }
    }

    return (
        <div className="page-container">
            {renderPage(currentMenu)}
        </div>
    )
}

export default Page
