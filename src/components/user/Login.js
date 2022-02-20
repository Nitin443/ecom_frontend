import React from "react";
import Layout from "../core/Layout";
import Menu from "../core/Menu";

function Login() {
    return (
        <div className='login'>

         <Menu />

         <Layout 
             title="login page"
             description="welcome at login page"
         />
        </div>
    );
}

export default Login;