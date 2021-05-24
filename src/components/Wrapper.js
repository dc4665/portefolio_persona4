import React from 'react'
import './Wrapper.min.css'

import ColorBand1 from './ColorBand1';
import MainMenu from './MainMenu';
import SectionContainer from './SectionContainer';
import BackgroundSquares from './BackgroundSquares';


function Wrapper() {
    return (
        <>
            <ColorBand1/>
            <div className="wrapper">
                <div id="menu">
                    <MainMenu/>
                </div>
                <div id="section">
                    <SectionContainer/>
                </div>        
            </div>
            <BackgroundSquares/>
        </>
    )
}

export default Wrapper
