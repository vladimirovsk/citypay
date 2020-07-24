import React, {Component} from "react";
import Input from '../UI/Input';
import "./Auth.scss";
import {NavLink} from "react-router-dom";
import is from 'is_js';
import {connect} from 'react-redux'
import {auth} from '../../store/actions/auth'
import {translate} from "react-switch-lang";

class Auth extends Component{

    state = {
        loading: true,
        okPassword: true,
        isFormValid:false,
        formControls:{
            email:{
                value: '',
                type: 'email',
                label:'fa fa-user ti-user',
                errorMessage: 'введите корректный email',
                valid:false,
                touched: false,
                placeholder: 'Введите Ваш email',

                validation:{
                    required: true,
                    email: true
                }
            },
            password:{
                value: '',
                type: 'password',
                label: 'fa fa-lock ti-unlock',
                errorMessage: 'введите корректный пароль',
                valid:false,
                touched: false,
                placeholder: 'Пароль',
                validation:{
                    required: true,
                    minLength: 6
                }

            }
        }
    }


    loginHandler = () => {
        this.props.auth(
            this.state.formControls.email.value,
            this.state.formControls.password.value,
            true
        );
        let okPassword = false
        this.setState({okPassword});
    }

    registerHandler = () => {
        this.props.auth(
            this.state.formControls.email.value,
            this.state.formControls.password.value,
            false
        );
    }
    submitHandler = event => {
        event.preventDefault();
    }

    validateControl = (value, validation) => {
        if (!validation){
            return true
        }

        let isValid = true

        if (validation.required){
            isValid = value.trim() !=='' && isValid
        }

        if (validation.email){
            isValid = is.email(value) &&isValid
        }

        if (validation.minLength){
            isValid = value.length >= validation.minLength && isValid
        }
        return isValid;
    }

    onChangeHandler = (event, controlName) => {

        const formControls = {...this.state.formControls}
        const control = {...formControls[controlName] }

        control.value = event.target.value
        control.touched = true

        control.valid = this.validateControl(control.value, control.validation)

        formControls[controlName] = control

        let isFormValid = true
        let okPassword = true

        Object.keys(formControls).forEach(name =>{
            isFormValid = formControls[name].valid && isFormValid
        })
        //console.log(t('login.header'))
        this.setState({
                formControls, isFormValid, okPassword
            })
    }

    renderInputs=(t)=>{
        return Object.keys(this.state.formControls).map((controlName, index) => {
            const control = this.state.formControls[controlName];
            let errMessage = t('login.errorMessagePassword');
            let errPlaceholder = t('login.placeholderPassword');
            if (controlName==='email'){
                errMessage = t('login.errorMessageEmail');
                errPlaceholder = t('login.placeholderEmail');
            }
            return (
                <Input
                    key={controlName + index}
                    type={control.type}
                    value={control.value}
                    valid={control.valid}
                    touched={control.touched}
                    label={control.label}
                    shouldValidate={!!control.validation}
                    errorMessage={errMessage}
                    placeholder={errPlaceholder}
                    onChange={event => this.onChangeHandler(event, controlName)}
                />
            )
        })

    }

    render(){
        const { t } = this.props;
    return (

        <div className="container">
            <div className="login-block">
                    <h3>{t('login.header')}</h3>
                        <form onSubmit={this.submitHandler} action="#">
                            {
                                this.renderInputs(t)
                            }
                            <span className="errorInput" hidden={this.state.okPassword}>Ошибка авторизации</span>
                            <button
                                className="btn btn-primary btn-block"
                                type="submit"
                                onClick={this.loginHandler}
                                disabled={!this.state.isFormValid}
                            >{t('login.login')}</button>

                            <div className="login-links" hidden={true}>
                                Еще нету аккаунта?<NavLink className="nav-link" to="/" exact >Регистрируйся</NavLink>
                            </div>

                        </form>
                </div>
            </div>
    )

    }

}



function mapDispatchToProps(dispatch){
    return{
        auth:(email, password, isLogin, okPassword) => dispatch(auth(email, password, isLogin, okPassword))
    }
}

export default connect(null, mapDispatchToProps) (translate(Auth));
