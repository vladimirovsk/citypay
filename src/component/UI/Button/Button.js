import React from "react";

import './Button.css'

const Button = props => {
    /*const cls =[
        classes.Button,
        classes[props.type]
    ];*/

    return (
        <button
            onClick={props.onClick}
            className='Button'
            type = {props.type}
            disabled={props.disabled}
        >
            {props.children}

        </button>
    )
}

export default Button;
