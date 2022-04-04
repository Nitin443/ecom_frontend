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