import React, {useState} from "react";
import Layout from "../core/Layout";
import { Redirect } from "react-router-dom";
import Menu from "../core/Menu";
import {login} from "../authApi";

function Login() {

    const[loginVal, setLoginVal] = useState({
       email: '',
       password: '',
       error: '',
       success: false
    })

    const {email, password} = loginVal;

      function handleChange(name){
          return(
              (event) => {
                setLoginVal({...loginVal, error: false, [name]: event.target.value});
              }
          );
      }

      

      const clickLogin = (event) => {
        event.preventDefault();
        login({email, password});
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

    const redirectUser = () => {
        return <Redirect to="/" />
    }

    return (
        <div className='login'>

            <Menu />

            <Layout title="Login" description="Login to Your Account" className="container col-md-6 offset-md-6"  >

                {loginHandler()}
                
            </Layout>
        </div>
    );
}

export default Login;