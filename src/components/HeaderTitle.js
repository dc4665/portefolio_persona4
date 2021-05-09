import React from 'react';
import './HeaderTitle.min.css';

function HeaderTitle(props) {
    return (
        <>
            <div className="horizontal-line"></div>
            <span className="section-name">{props.title}</span>
        </>
    )
}

export default HeaderTitle
