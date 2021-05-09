import React, { useContext } from 'react';
import './MenuButton.min.css';
import { MenuContext } from '../contexts/MenuContext'

function MenuButton(props) {
    const { setCurrentMenu } = useContext(MenuContext);
    
    return (
        <>
            <button className="btn-main-menu" onClick={() => { setCurrentMenu(props.name)}}>{props.name}</button>
        </>
    )
}

export default MenuButton
