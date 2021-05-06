import React, { useState, useEffect } from 'react'
import HeaderTitle from './HeaderTitle'
import './SectionContainer.min.css'


function SectionContainer() {
    return (
        <section className="section-container">
            <div className="section-title">
                <HeaderTitle/>
            </div>
        </section>
    )
}

export default SectionContainer
