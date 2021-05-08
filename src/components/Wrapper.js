import React, { useState, useEffect } from 'react'
import './Wrapper.min.css'

import ColorBand1 from './ColorBand1';
import MainMenu from './MainMenu';
import HeaderTitle from './HeaderTitle';
import SectionContainer from './SectionContainer';


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
        </>
    )
}

export default Wrapper
