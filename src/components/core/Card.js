import React from "react";
import { Link } from "react-router-dom";
//import "./Card.css";

const Card = ({ product }) => {
    return (

        // <div className="card">
        // <img className="card-img-top" src="https://m.media-amazon.com/images/I/81-kYsU1JeL._AC_UL320_.jpg"></img>
        //     <div className="card-body">
        //         <h5 className="card-title">{product.name}</h5>
        //         <p className="card-text"> ₹ {product.price}</p>
        //         <p className="card-text">{product.description}</p>
        //         <Link to='/'>
        //             <button className="btn btn-primary">
        //                 View Product
        //             </button>
        //         </Link>
        //         <button className="btn btn-outline-warning mt-2 mb-2">
        //             Add to Cart
        //         </button>
        //     </div>
        // </div>


        <div className="product">

            <img src='https://m.media-amazon.com/images/I/81-kYsU1JeL._AC_UL320_.jpg' alt="productImg" />
            <div className="productInfo">
                <p>{product.name}</p>
                <p className="productPrice">
                    <small>₹</small>
                    <strong>{product.price}</strong>
                </p>

            </div>
            {/* <p>{product.description}</p> */}
            <div>
                <Link to='/'>
                    <button className="btn button btn-primary">
                        View Product
                    </button>
                </Link>
                <button className="btn btn-outline-warning">
                    Add to Cart
                </button>
            </div>


        </div>

    );
}

export default Card;

