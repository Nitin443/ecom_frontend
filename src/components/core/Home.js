import React, { useState, useEffect } from 'react';
import Layout from './Layout';
import Menu from './Menu';
import { API } from '../../config';
import { getProduct, getProduct1 } from './coreApi';
import Card from './Card';
import './Card.css';
import Search from './Search';
import './Home.css';
import Footer from './Footer';

function Home() {

    const [productBySell, setProductBySell] = useState([]);
    const [productByArrival, setProductByArrival] = useState([]);
    const [error, setError] = useState(false);

    const loadProductsBySell = async () => {
        const products = await getProduct1('sold');
        if (products.errorMessage) {
            setError(products.errorMessage);
        } else {
            setProductBySell(products.ProductList)
        }
    }

    const loadProductsByArrival = async () => {
        const products = await getProduct('createdAt');
        console.log(products);
        if (products.errorMessage) {
            setError(products.errorMessage);
        } else {
            setProductByArrival(products.ProductList)
        }
    }

    useEffect(() => {
        loadProductsBySell();
        loadProductsByArrival();
    }, []);


    return (
        <div>

            <Menu />

            <Layout
                title="Ecommerce App"
                description="Welcome To Our Ecommerce App. Do Shopping With Best Price"
                className="container-fluid"
            />
            <div className='searchBar'>
                <Search />
            </div>

            <h2 className='mb-4'>New Arrival</h2>
            <div className='productStyle'>
                {productByArrival.map((product, i) => {
                    return (
                        <Card key={i} product={product} />
                    );
                })}

            </div>

            <h2 className='mb-4'>Best Seller</h2>
            <div className='productStyle'>
                {productBySell.map((product, i) => {
                    return (
                        <Card key={i} product={product} />
                    );
                })}

            </div>

           <Footer />


        </div>
    );
}

export default Home;