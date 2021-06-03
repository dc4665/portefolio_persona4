import React from 'react'
import './ColorBand1.min.css'

function ColorBand1() {
    return (
        <div className="band-container">
            <span className="band-1"></span>
            <span className="space-1"></span>
            <span className="band-2"></span>
            <span className="space-2"></span>
            <span className="band-3"></span>
            <span className="space-1"></span>
            <span className="band-4"></span>
            <span className="space-1"></span>
            <span className="band-5"></span>
            <span className="space-2"></span>
            <span className="band-6"></span>
            <span className="space-1"></span>
            <span className="band-7"></span>
            <span className="space-1"></span>
            <span className="band-8"></span>
            <span className="space-1"></span>
            <div className="special-band-container">
                <svg
                    className="wave"
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 53.41 792"
                >
                    <defs>
                        <radialGradient
                            id="radial-gradient"
                            cx="51.22"
                            cy="375.02"
                            r="418.96"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop offset="0" stopColor="#fff200" />
                            <stop offset="0.08" stopColor="#fadc07" />
                            <stop offset="0.2" stopColor="#f5c310" />
                            <stop offset="0.33" stopColor="#f1af16" />
                            <stop offset="0.48" stopColor="#eea11b" />
                            <stop offset="0.66" stopColor="#ec991d" />
                            <stop offset="1" stopColor="#f28705" />
                            <stop offset="1" stopColor="#ef7324" />
                            <stop offset="1" stopColor="#f15a29" />
                        </radialGradient>
                    </defs>
                    <title>wave</title>
                    <g id="wave">
                        <path
                            d="M33.32,792H86.73C86.28,740.63,70.06,728.69,65,656.76c-6-85.36,20-86.28,20-171.85S65,399.34,65,313.78s20-85.57,20-171.14C85,67.46,76,58.76,68.14,0H33.32Z"
                            transform="translate(-33.32)"
                            fill="url(#radial-gradient)"
                        />
                    </g>
                </svg>
            </div>
            <span className="space-1"></span>
            <span className="space-2"></span>
            <span className="band-9"></span>
            <span className="space-1"></span>
            <span className="band-10"></span>
        </div>
    );
}

export default ColorBand1
