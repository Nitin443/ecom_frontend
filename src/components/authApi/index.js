export const signup = async (user) => {
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


export const login = async(user) => {
    try {
      
      const data = await fetch('http://localhost:8000/login', {
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