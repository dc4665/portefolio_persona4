import React from 'react';
import './MenuButton.min.css';

function MenuButton(props) {
    return (
        <>
            <button className="btn-main-menu">{props.name}</button>  
        </>
    )
}

export default MenuButton
