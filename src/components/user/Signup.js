import React, { useState } from "react";
import Layout from "../core/Layout";
import Menu from "../core/Menu";
import {signup} from "../authApi";
import {isUndefined} from "lodash";
import {Link} from "react-router-dom";


function Signup() {

    const [values, setValues] = useState({
        names: '',
        email: '',
        password: '',
        error: '',
        success: false
    })

    function handleChange(name) {
        return (
            (event) => {
                setValues({ ...values, error: false, [name]: event.target.value });
            }
        )
    }

    // const handleChange = (name) => (event) => {
    //     setValues({ ...values, error: false, [name]: event.target.value });
    // };

    const { name, email, password, error, success } = values;


    const clickSignup = async(event) => {
        event.preventDefault();
     const data = await signup({ name, email, password });
        // console.log(data.errorMessage[0].message); 

       if(!isUndefined(data.errorMessage)){
           setValues({...values, error: data.errorMessage[0].message, success: false});
       }else{
           setValues({...values, name: '', email: '', password: '', error: '', success: true});
       }
    };

    const showError = () => {
        return (
            <div className="alert alert-danger" style={{ display: error ? '' : 'none' }}>
                {error}
            </div>
        );
    };


    const showSucess = () => {
        return (
            <div className="alert alert-info" style={{ display: success ? '' : 'none' }}>
                New Account is created. Please <Link to="/login">Login</Link>
            </div>
        );
    };

    const signupForm = () => {
        return (
            <form>

                <div className="form-group">
                    <label className="text-muted">Name</label>
                    <input onChange={handleChange('name')} type="text" className="form-control" value={name} />
                </div>

                <div className="form-group">
                    <label className="text-muted">Email</label>
                    <input onChange={handleChange('email')} type="email" className="form-control" value={email} />
                </div>

                <div className="form-group">
                    <label className="text-muted">Password</label>
                    <input onChange={handleChange('password')} type="password" className="form-control" value={password} />
                </div>

                <button onClick={clickSignup} className="btn btn-primary">SignUp</button>

            </form>
        );
    }


    return (
        <div className='signup'>

            <Menu />
             
            <Layout title="Signup" description="Signup To Our App" className="container col-md-6 offset-md-6" >
              
                {showError()}
                {showSucess()}
                {signupForm()}
                
            </Layout>
        </div>
    );
}

export default Signup;