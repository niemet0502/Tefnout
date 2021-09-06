import React from "react";

const FormRadio = (props) => {
    return (
        <div className="FormRadio">
            <input id={props.id} onChange={props.changed} value={props.value} type="radio" checked={props.isSelected} />
            <label htmlFor={props.id}>{props.label}</label>
        </div>
    );
}

export default FormRadio;