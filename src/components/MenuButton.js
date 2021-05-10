import React, { useContext } from "react";
import "./MenuButton.min.css";
import { MenuContext } from "../contexts/MenuContext";

function MenuButton(props) {
    const { setCurrentMenu } = useContext(MenuContext);
    const { currentMenu } = useContext(MenuContext);
    let selected = false;

    if(currentMenu === props.name) {
        selected = !props.selected;
    }
    
    return (
        <>
            {
                selected ?
                <button
                className="btn-main-menu btn-is-selected"
                onClick={() => {
                    setCurrentMenu(props.name);
                }}
                >
                {props.name}
                </button>
                :
                <button
                className="btn-main-menu"
                onClick={() => {
                    setCurrentMenu(props.name);
                }}
            >
                {props.name}
            </button>
            } 
        </>
    );
}

export default MenuButton;
