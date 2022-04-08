import React from "react";
import { Link } from "react-router-dom";
import "./ProductPage.css";

const ProductPage = ({ product }) => {
    return (

        <div className="productStylesss fluid-container">
            <div className="imageClasses">
                <img src='https://m.media-amazon.com/images/I/81-kYsU1JeL._AC_UL320_.jpg' alt="productImg" />
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
                
                    <button className="btn buttonClass btn-primary">
                        Add to Cart
                    </button>
                

            </div>
        </div>

    );
}

export default ProductPage;