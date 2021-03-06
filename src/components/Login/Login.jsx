import React from 'react';
import {Field, reduxForm} from "redux-form";
import {createField, Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import styles from '../common/FormsControls/FormsControls.module.css'
import loginStyles from '../Login/Login.module.css'

const LoginForm = ({ handleSubmit, error, captchaUrl }) => {
    return (
        <form onSubmit={handleSubmit} >
            <div className={loginStyles.form__input}>
                <Field placeholder={'Login'} name={'email'} component={Input}
                       validate={[required]}/>
            </div>
            <div className={loginStyles.form__input}>
                <Field placeholder={'Password'} name={'password'} type={'password'} component={Input}
                       validate={[required]}/>
            </div>
            <div className={loginStyles.checkbox}>
                <Field type={'checkbox'} name={'rememberMe'} component={Input}/> remember me
            </div>
            { error &&
            <span className={styles.formSummaryError}>
                {error}
            </span>
            }
            { captchaUrl && <div><img src={captchaUrl} alt='captcha' /></div> }
            { captchaUrl &&
            createField('Symbols from image', 'captcha', [required], Input, {}, '') }
            <div className={loginStyles.form__button}>
                <button>Login</button>
            </div>
        </form>
    )
};

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {

    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }

    if (props.isAuth) {
        return <Redirect to={'profile'}/>
    }

    return <div className={loginStyles.loginWrapper}>
        <h1 className={loginStyles.login__title}>Login</h1>
        <LoginReduxForm className={loginStyles.form__body} onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
    </div>
}

const mapStateToProps = (state) => ({
        isAuth: state.auth.isAuth,
        captchaUrl: state.auth.captchaUrl
    }
)

export default connect(mapStateToProps, {login})(Login);
