import React, { useState, useEffect } from 'react';
import Layout from './Layout';
import Menu from './Menu';
import { getSingleProduct } from './coreApi';
import { useParams } from 'react-router-dom';
import ProductPage from './ProductPage';


//const foo = params.get('bar');


const SingleProduct = () => {

    const [product, setProduct] = useState({});
    const [error, setError] = useState();
    const { productId } = useParams();

    const loadSingleProduct = async (productId) => {
        const product = await getSingleProduct(productId);
        console.log(product);
        if (product.errorMessage) {
            setError(product.errorMessage);
        } else {
            setProduct(product.Product);
        }
    };

    useEffect(() => {
        loadSingleProduct(productId);
    }, []);

    return (
        <div>
            <Menu />

            <Layout
                title="Nitin Ecommerce App"
                description="All Details of Product Available Here"
                className="container-fluid"
            />
           
           <ProductPage product={product}/>
        </div>
    );
}

export default SingleProduct;