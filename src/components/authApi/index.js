export const signup = async (user) => {
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


export const login = async (user) => {

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