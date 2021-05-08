import React, { useState, useEffect } from 'react'
import HeaderTitle from './HeaderTitle'
import './SectionContainer.min.css'


function SectionContainer() {
    return (
        <section className="section-container">
            <div className="section-title">
                <HeaderTitle/>
            </div>
            <div className="section-article">

            </div>
        </section>
    )
}

export default SectionContainer
