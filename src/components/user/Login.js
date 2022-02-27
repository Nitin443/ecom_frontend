import React, { useState } from "react";
import Layout from "../core/Layout";
import { Redirect } from "react-router-dom";
import Menu from "../core/Menu";
import { login } from "../authApi";
import { isUndefined } from "lodash";

function Login() {

    const [loginVal, setLoginVal] = useState({
        email: '',
        password: '',
        error: '',
        redirect: false
    })

    const { email, password, redirect, error } = loginVal;

    function handleChange(name) {
        return (
            (event) => {
                setLoginVal({ ...loginVal, error: false, [name]: event.target.value });
            }
        );
    }



    const clickLogin = async (event) => {
        event.preventDefault();
        const data = await login({ email, password });

        // set token in local storage
        localStorage.setItem('token', data.token);
        console.log(data);
        

        if (!isUndefined(data.errorMessage)) {
            setLoginVal({ ...loginVal, error:  data.errorMessage});
        }else {
            setLoginVal({ ...loginVal, redirect: true });
        }
    }

    function loginHandler() {
        return (
            <form>

                <div className="form-group">
                    <label className="text-muted">Email</label>
                    <input onChange={handleChange('email')} type="email" className="form-control" />
                </div>

                <div className="form-group">
                    <label className="text-muted">Password</label>
                    <input onChange={handleChange('password')} type="password" className="form-control" />
                </div>

                <button onClick={clickLogin} className="btn btn-primary">Login</button>

            </form>
        );
    }

    const showError = () => {
        return (
            <div className="alert alert-danger" style={{ display: error ? '' : 'none' }}>
                {error}
            </div>
        );
    };

    const redirectUser = () => {

        return <Redirect to="/" />
    };

    return (
        <div className='login'>

            <Menu />

            <Layout title="Login" description="Login to Your Account" className="container col-md-6 offset-md-6"  >

                {showError()}
                {redirect ? redirectUser() : ''}
                {loginHandler()}

            </Layout>
        </div>
    );
}

export default Login;