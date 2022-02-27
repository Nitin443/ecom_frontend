import { Redirect } from "react-router-dom";
import { isUndefined } from "lodash";

export const signup = async (user) => {    // here we can write instead of user = email, name, password 
    try {
        const response = await fetch('http://localhost:8000/signup', {
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
        const response = await fetch('http://localhost:8000/login', {
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
        console.log(localStorage.getItem("token"));
        return true;

    }else{
        return false;
    }

}