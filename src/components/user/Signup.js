import React from "react";
import Layout from "../core/Layout";
import Menu from "../core/Menu";

function Signup() {
    return (
        <div className='signup'>

        <Menu />

         <Layout 
             title="signup page"
             description="welcome at signup page"
         />
        </div>
    );
}

export default Signup;