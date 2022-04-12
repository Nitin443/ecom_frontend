import React, { useState, useEffect, useDebugValue } from 'react';
import Layout from '../core/Layout';
import Menu from '../core/Menu';
import { Link } from 'react-router-dom';
import { getProducts, deleteProduct } from './adminApi';
import './ManageProducts.css'

const ManageProducts = () => {
const[products, setProducts] = useState([]);

const token = localStorage.getItem("token");

const loadProducts = async() => {
   const prodcuts = await getProducts();
   if(prodcuts.errorMessage){
       console.log(prodcuts.errorMessage);
   }else{
       setProducts(prodcuts.Products);
   }
};

const deletePro = async (productId) => {
    const delPro = await deleteProduct(token, productId);
    if(delPro.errorMessage){
        console.log(delPro.errorMessage);
    }else{
        loadProducts();
    }
}

useEffect(() => {
   loadProducts();
}, []);

    return (
        <div>
            <Menu />

            <Layout
                title="Manage Products"
                description="Here You Can Manage Your Products "
                className="container-fluid"
            />
            <div className='container topDiv'>
                <div className=''>
                <h2 className='text-center h1Color'>
                   Total  {products.length} Products
                </h2>
                    <ul className='list-group-item'>
                        {products.map((p, i) => {
                            return(
                                <li key={i} className='list-group-item '>
                                    <strong className='inDiv'>{p.name}</strong>
                                    <Link to={`/admin/product/update/${p._id}`} >
                                        <span className='badge updateBtn'>Update</span>
                                    </Link>
                                    <span onClick={() => deletePro(p._id)} className='badge deleteBtn'>
                                        Delete
                                    </span>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default ManageProducts;