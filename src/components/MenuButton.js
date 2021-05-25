import React, { useContext } from "react";
import "./MenuButton.min.css";
import { MenuContext } from "../contexts/MenuContext";

function MenuButton(props) {
    const { setCurrentMenu } = useContext(MenuContext);
    const { currentMenu } = useContext(MenuContext);
    let selected = false;

    if(currentMenu === props.value) {
        selected = !props.selected;
    }
    
    return (
        <>
            {
                selected ?
                <button
                className="btn-main-menu btn-is-selected"
                onClick={() => {
                    setCurrentMenu(props.value);
                }}
                >
                {props.name}
                </button>
                :
                <button
                className="btn-main-menu"
                onClick={() => {
                    setCurrentMenu(props.value);
                }}
            >
                {props.name}
            </button>
            } 
        </>
    );
}

export default MenuButton;

/* 
    props.name => it's only the name in the button
    props.value => it's the important part, which influence all the other components to know in which menu we currently are.
*/