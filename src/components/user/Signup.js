import React, { useState } from "react";
import Layout from "../core/Layout";
import Menu from "../core/Menu";



function Signup() {

    const [values, setValues] = useState({
        name: '',
        email: '',
        password: '',
        error: '',
        success: false
    })

    // function handleChange(name){
    //     (event) => {
    //         setValues({...values, error: false, [name]: event.target.value});
    //     }
    // }

    const handleChange = name => event => {
        setValues({ ...values, error: false, [name]: event.target.value });
    };

    const signupForm = () => {
        return (
            <form>

                <div className="form-group">
                    <label className="text-muted">Name</label>
                    <input onChange={handleChange('name')} type="text" className="form-control" />
                </div>

                <div className="form-group">
                    <label className="text-muted">Email</label>
                    <input onChange={handleChange('email')} type="email" className="form-control" />
                </div>

                <div className="form-group">
                    <label className="text-muted">Password</label>
                    <input onChange={handleChange('password')} type="password" className="form-control" />
                </div>

                <button className="btn btn-primary">SignUp</button>

            </form>
        );
    }


    return (
        <div className='signup'>

            <Menu />

            <Layout title="Signup" description="Signup To Our App" className="container col-md-6 offset-md-6">
                {signupForm()}
            </Layout>

        </div>
    );
}

export default Signup;