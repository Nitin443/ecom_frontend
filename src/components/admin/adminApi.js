import { API } from "../../config";

export const creatCategory = async (token, category) => {    
    try {
        const response = await fetch('https://ecombackend1999.herokuapp.com/category/create', {
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
        const response = await fetch('https://ecombackend1999.herokuapp.com/product/create', {
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
        const response = await fetch('https://ecombackend1999.herokuapp.com/category/get', {
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


export const getProducts = async () => {    
    try {
        const response = await fetch('https://ecombackend1999.herokuapp.com/product/get', {
            method: "GET",
        });

        const data = await response.json();
        return await data;

    } catch (error) {
        throw new Error(error);
    }
};


export const deleteProduct = async (token, productId) => {    
    try {
        const response = await fetch(`https://ecombackend1999.herokuapp.com/product/delete/${productId}`, {
            method: "DELETE",
            headers: {
                Accept: "application/json",
                Authorization: `Bearer ${token}`
            },
        });

        const data = await response.json();
        return await data;

    } catch (error) {
        throw new Error(error);
    }
};


export const getSingleProduct = async (productId) => {    
    try {
        const response = await fetch(`https://ecombackend1999.herokuapp.com/product/get/${productId}`, {
            method: "GET",
        });

        const data = await response.json();
        return await data;

    } catch (error) {
        throw new Error(error);
    }
};


export const updateProduct = async (token, productId, productData) => {    
    try {
        const response = await fetch(`https://ecombackend1999.herokuapp.com/product//update/${productId}`, {
            method: "PUT",
            headers: {
                Accept: "application/json",
                Authorization: `Bearer ${token}`
            },
            body: productData
        });

        const data = await response.json();
        return await data;

    } catch (error) {
        throw new Error(error);
    }
};



