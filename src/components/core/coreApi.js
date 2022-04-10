import queryString from 'query-string';

export const getProduct = async (sortBy) => {    
    try {
        // const response = await fetch('http://localhost:8000/product/list?sordBy=' + sortBy + '&order=desc&limit=4', {
        //     method: "GET",
        // });

        const response = await fetch(`http://localhost:8000/product/list?sordBy=${sortBy}&order=desc&limit=4`, {
            method: "GET",
        });

        const data = await response.json();
        return await data;

    } catch (error) {
        throw new Error(error);
    }
};

export const getAllProduct = async (sortBy) => {    
    try {
        // const response = await fetch('http://localhost:8000/product/list?sordBy=' + sortBy + '&order=desc&limit=4', {
        //     method: "GET",
        // });

        const response = await fetch(`http://localhost:8000/product/list?sordBy=${sortBy}&order=desc&limit=50`, {
            method: "GET",
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


export const getFilterProducts = async (limit, skip, filters = {}) => {   
    const filterData = {
       limit, skip, filters
    }; 
    try {
        const response = await fetch('http://localhost:8000/product/search', {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(filterData)
        });

        const data = await response.json();
        return await data;

    } catch (error) {
        throw new Error(error);
    }
};



export const list = async (params) => {    
    try {
        const query = queryString.stringify(params);
        const response = await fetch(`http://localhost:8000/product/listSearch?${query}`, {
            method: "POST",
        });

        const data = await response.json();
        return await data;

    } catch (error) {
        throw new Error(error);
    }
};

///get/:productId
export const getSingleProduct = async (productId) => {    
    try {
        const response = await fetch(`http://localhost:8000/product/get/${productId}`, {
            method: "GET",
            headers: {
            },
        });

        const data = await response.json();
        return await data;

    } catch (error) {
        throw new Error(error);
    }
};

export const getTreeToken = async (userId, token) => {    
    try {
        const response = await fetch(`http://localhost:8000/tree/getToken/${userId}`, {
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