import React from 'react'
import './Wrapper.min.css'

import ColorBand1 from './ColorBand1';
import MainMenu from './MainMenu';
import SectionContainer from './SectionContainer';
import BackgroundSquares from './BackgroundSquares';
import LanguagesMenu from './LanguagesMenu';
import WelcomeDisclaimer from './WelcomeDisclaimer';


function Wrapper() {
    return (
        <>
            <ColorBand1/>
            <div className="wrapper">
                <div id="menu">
                    <MainMenu/>
                    <LanguagesMenu/>
                </div>
                <div id="section">
                    <SectionContainer/>
                </div>        
            </div>
            <BackgroundSquares/>
            <WelcomeDisclaimer/>
        </>
    )
}

export default Wrapper
