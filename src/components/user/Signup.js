import React, { useState } from "react";
import Layout from "../core/Layout";
import Menu from "../core/Menu";



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

    const { name, email, password } = values;

    // const signup = (user) => {
    //   // console.log(user);
    //   fetch('http://localhost:8000/signup', {
    //       method: "POST",
    //       headers: {
    //           Accept: "application/json",
    //           "Content-Type": "application/json"
    //       },
    //       body: JSON.stringify(user)
    //   })
    //   .then(response => {
    //       return response.json();
    //   })
    //   .catch(err => {
    //       console.log(err)
    //   });
    // };

  const signup =  async (user) => {
        try {
            const data = await fetch('http://localhost:8000/signup', {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(user)
            });

            return data.json();

        } catch (error) {
            console.log(error);
        }
    };

    const clickSignup = (event) => {
        event.preventDefault();
        signup({ name, email, password });
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

                <button onClick={clickSignup} className="btn btn-primary">SignUp</button>

            </form>
        );
    }


    return (
        <div className='signup'>

            <Menu />

            <Layout title="Signup" description="Signup To Our App" className="container col-md-6 offset-md-6" children={signupForm()}>
                {/* {signupForm()} */}
            </Layout>

        </div>
    );
}

export default Signup;