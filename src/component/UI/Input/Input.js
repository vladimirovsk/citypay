import React from "react";
import classes from './Input.css'

function isInvalid({valid, touched, shouldValidate}){
    return !valid && shouldValidate && touched
}
const Input = props =>{
    const inputType = props.type || 'text'
    const cls = [classes.Input]
    const htmlFor =`${inputType}-${Math.random()}`

    if(isInvalid(props)){
        cls.push(classes.invalid)
    }
//            <label htmlFor={htmlFor}>{props.label}</label>
    return (
        <div className="form-group">
            <div className="input-group">
                <span className="input-group-addon"><i className={props.label}></i></span>
            <input
                type={inputType}
                id={htmlFor}
                value={props.value}
                onChange={props.onChange}
                placeholder={props.placeholder}
                className="form-control"
            />
            </div>

            {
                isInvalid(props)
                    ?<span className="errorInput">{props.errorMessage || 'Введите верное значение'}</span>
                    :null
            }
        </div>
    )
}

export default Input;
