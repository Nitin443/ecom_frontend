export const getUserProfile = async (token) => {   
    try {
        const response = await fetch(`https://ecombackend1999.herokuapp.com/userProfile`, {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },
        });

        const data = await response.json();
        return await data;

    } catch (error) {
        throw new Error(error);
    }
};


export const updateUserProfile = async (token, user) => {   
    try {
        const response = await fetch(`https://ecombackend1999.herokuapp.com/updateProfile`, {
            method: "PUT",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(user)
        });

        const data = await response.json();
        return await data;

    } catch (error) {
        throw new Error(error);
    }
};


export const updateUserLocally = (user, next) => {
   if(typeof window !== "undefined"){
      if(localStorage.getItem("token")){
          let auth = localStorage.getItem("token");
          auth.user = user;
          localStorage.setItem("token", JSON.stringify(auth));
          next();
      }
   }
}




