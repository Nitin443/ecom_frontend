import { Redirect } from "react-router-dom";
import { isUndefined } from "lodash";

export const signup = async (user) => {    // here we can write instead of user = email, name, password 
    try {
        const response = await fetch('https://ecombackend1999.herokuapp.com/signup', {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        });

        const data = await response.json();
        return await data;

    } catch (error) {
        throw new Error(error);
    }
};


// export const signup = (user) => {
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


export const login = async (user) => {   // here we can write instead of user = email, password

    try {
        const response = await fetch('https://ecombackend1999.herokuapp.com/login', {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        });

        const data = await response.json();
        return await data;
        // err.errorMessage[0].message

    } catch (error) {
        throw new Error(error);
    }
};


export const logout = async () => {

    try {

        localStorage.removeItem('token');
        localStorage.removeItem('name');
        localStorage.removeItem('role');
        localStorage.removeItem('email');
        localStorage.removeItem('userId');
        return <Redirect to="/" />

    } catch (error) {
        throw new Error(error);
    }
};



export const isAuthenticate = () => {

    if(typeof window === "undefined"){
        return false;
    }

    if (localStorage.getItem("token")) {
        if(localStorage.getItem("token") === "undefined"){
            return false;
        }else{
            return true;
        }

    }else{
        return false;
    }

}