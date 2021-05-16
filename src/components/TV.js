import React, { useState } from 'react'
import ProjectScreen from './ProjectScreen'
import './TV.min.css'

function TV(props) {
    let [projectScreen, setProjectScreen] = useState(false);

    function turnOn() {
        projectScreen = setProjectScreen(!projectScreen);    
    }

    return (
        <div className="tv-container" onClick={turnOn}>
            <img className="tv-img" src="img/tv.png" alt=""/>
            <p>Test</p>
            <ProjectScreen name={props.name} isVisible={projectScreen}/>
        </div>
    )
}

export default TV
