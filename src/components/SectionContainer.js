import React, { useState, useEffect, useContext } from 'react'
import HeaderTitle from './HeaderTitle'
import { MenuContext } from '../contexts/MenuContext'
import './SectionContainer.min.css'


function SectionContainer() {
    const {currentMenu} = useContext(MenuContext);

    return (
        <section className="section-container">
            <div className="section-title">
                <HeaderTitle title={currentMenu}/>
            </div>
            <div className="section-article">

            </div>
        </section>
    )
}

export default SectionContainer
