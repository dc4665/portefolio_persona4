import React, { useContext } from 'react'
import HeaderTitle from './HeaderTitle'
import Page from './Page'
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
                <Page />
            </div>
        </section>
    )
}

export default SectionContainer
