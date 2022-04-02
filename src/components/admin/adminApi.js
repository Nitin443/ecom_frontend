import { API } from "../../config";

export const creatCategory = async (token, category) => {    
    try {
        const response = await fetch('http://localhost:8000/category/create', {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(category)
        });

        const data = await response.json();
        return await data;

    } catch (error) {
        throw new Error(error);
    }
};

// ${API}/category/create

export const addProduct = async (token, product) => {    
    try {
        const response = await fetch('http://localhost:8000/product/create', {
            method: "POST",
            headers: {
                Accept: "application/json",
                Authorization: `Bearer ${token}`
            },
            body: product
        });

        const data = await response.json();
        return await data;

    } catch (error) {
        throw new Error(error);
    }
};


export const getCategory = async (token) => {    
    try {
        const response = await fetch('http://localhost:8000/category/get', {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`
            },
        });

        const data = await response.json();
        return await data;

    } catch (error) {
        throw new Error(error);
    }
};