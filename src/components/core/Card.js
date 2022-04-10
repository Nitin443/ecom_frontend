import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import "./Card.css";
import { addItem, updateItem, removeItem } from "./cartHelper";

const Card = ({product, showAddToCartButton=true, cartUpdateButton=false, showRemoveButton=false}) => {
    const [redirect, setRedirect] = useState(false);
    const [count, setCount] = useState(product.count);

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

    const showCartButton = (showAddToCartButton) => {
        if(showAddToCartButton){
            return(
                <button onClick={addToCart} className="btn btn-outline-warning">
                Add to Cart
            </button>
            );
        }else{
            return(' ');
        }
    }

    const showRemoveButtons = (showRemoveButton) => {
        if(showRemoveButton){
            return(
                <button onClick={ () => removeItem(product._id)} className="btn btn-outline-danger">
                Remove Item
            </button>
            );
        }else{
            return(' ');
        }
    }

    const handleChange = (productId) => (event) => {
        setCount(event.target.value < 1 ? 1 : event.target.value);
        if(event.target.value > 1){
            updateItem(productId, event.target.value);
        }
    }

    const updateButton = (cartUpdateButton) => {
        if(cartUpdateButton){
            return (
                <div className='input-group mb-3'>
                    <div className='input-group-prepend'>
                        <span className="input-group-text">
                            Adjsut Quantity
                        </span>
                    </div>
                    <input type='number' className="flow-control" value={count} onChange={handleChange(product._id)}/>
                </div>
            );
        }
        
    }

    return (

        <div className="product">

            <img src={product.url} alt="productImg" />
            <div className="productInfo">
                <p>{product.name}</p>
                <p className="productPrice">
                    <small>₹</small>
                    <strong>{product.price}</strong>
                </p>

            </div>
            {/* <p>{product.description}</p> */}
            <div>
                <Link to={`/product/${product._id}`}>
                    <button className="btn button btn-primary">
                        View Product
                    </button>
                </Link>
                {showCartButton(showAddToCartButton)}
                {showRemoveButtons(showRemoveButton)}
                {updateButton(cartUpdateButton)}


            </div>
            {shouldRedirect(redirect)}

        </div>

    );
}

export default Card;

