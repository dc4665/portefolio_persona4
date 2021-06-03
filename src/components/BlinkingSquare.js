import React from 'react'
import './BlinkingSquare.min.css'

function BlinkingSquare() {
    let blinkingTiming = Math.random() * (5 - 1) + 1;

    return (
        <div className="blinking-square" style={{ animation: `flicker ${blinkingTiming}s infinite`}}>
            
        </div>
    )
}

export default BlinkingSquare
