import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import "./ProductPage.css";
import { addItem } from "./cartHelper";

const ProductPage = ({ product }) => {


    const [redirect, setRedirect] = useState(false);

    const addToCart = () => {
        addItem(product, () => {
            setRedirect(true);
        });
    }

    const shouldRedirect = (redirect) => {
        if (redirect) {
            return <Redirect to='/cart' />
        }
    }

    return (

        <div className="productStylesss fluid-container">
            <div className="imageClasses">
                <img src={product.url} alt="productImg" />
            </div>
            <div className="productDetailsss">
                <div className="">
                    <h3>{product.name}</h3>
                    <p className="">
                        <small>₹</small>
                        <strong>{product.price}</strong>
                    </p>
                    <p>{product.description}</p>
                    <p>Sold : {product.sold}</p>
                    <p>Left in Stock : {product.quantity}</p>
                </div>
                
                    <button onClick={addToCart} className="btn buttonClass btn-primary">
                        Add to Cart
                    </button>
                    {shouldRedirect(redirect)}

            </div>
        </div>

    );
}

export default ProductPage;