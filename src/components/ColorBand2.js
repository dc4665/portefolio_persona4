import React from 'react'
import './ColorBand2.min.css'

function ColorBand2() {
    return (
        <div className="band-container-skills">
            <span className="band-skills-1"></span>
            <span className="space-skill-1"></span>
            {/* <span className="band-skills-2"></span>
            <span className="space-skill-2"></span> */}
            <div className="special-band-container-2">
                <svg
                    className="wave-2"
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 93.58 792"
                >
                    <defs>
                        <radialGradient
                            id="radial-gradient-2"
                            cx="80.1"
                            cy="392.86"
                            r="1249.24"
                            gradientTransform="translate(-8.75 206.96) rotate(-2.67) scale(1 0.48)"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop offset="0" stopColor="#f37d80" />
                            <stop offset="0.09" stopColor="#eb7677" />
                            <stop offset="0.24" stopColor="#d4625e" />
                            <stop offset="0.43" stopColor="#af4335" />
                            <stop offset="0.58" stopColor="#82110C" />
                        </radialGradient>
                    </defs>
                    <title>wave-1</title>
                    <path
                        d="M219.46,0H126.78V792h93.58c-7.86-22.74-18.66-49.16-25.1-92.13-15-100.36,19.89-103,19.89-204.45s-20-101.47-20-202.95,20-101.48,20-203C215.15,47.23,218.41,21.93,219.46,0Z"
                        transform="translate(-126.78)"
                        fill="url(#radial-gradient-2)"
                    />
                </svg>
            </div>
            <span className="space-skill-2"></span>
            <span className="band-skills-3"></span>
            <span className="space-skill-1"></span>
            <span className="band-skills-4"></span>
            <span className="space-skill-1"></span>
            <span className="band-skills-5"></span>
            <span className="space-skill-2"></span>
            <span className="band-skills-6"></span>
        </div>
    );
}

export default ColorBand2
