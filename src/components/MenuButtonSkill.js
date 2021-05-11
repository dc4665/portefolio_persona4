import React, { useContext } from "react";
import "./MenuButtonSkill.min.css";
import { SkillMenuContext } from "../contexts/SkillMenuContext";

function MenuButtonSkill(props) {
    const { setCurrentSkill } = useContext(SkillMenuContext);
    const { currentSkill } = useContext(SkillMenuContext);
    let selectedSkill = false;

    if (currentSkill === props.name) {
        selectedSkill = !props.selectedSkill;
    }

    return (
        <div className="btn-skill-container">
            {selectedSkill ? (
                <>
                    <button
                        class="btn-skill-menu btn-skill-menu-is-selected"
                        onClick={() => {
                            setCurrentSkill(props.name);
                        }}
                    ></button>
                    <span className="btn-skill-name">{props.name}</span>
                </>
            ) : (
                <>
                    <button
                        class="btn-skill-menu"
                        onClick={() => {
                            setCurrentSkill(props.name);
                        }}
                    ></button>
                    <span className="btn-skill-name">{props.name}</span>
                </>
            )}
        </div>
    );
}

export default MenuButtonSkill;
