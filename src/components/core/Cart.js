import { useEffect, useState } from "react";
import { getCartItem } from "./cartHelper";
import Layout from './Layout';
import Menu from './Menu';
import Card from "./Card";
import { Link } from "react-router-dom";
import './Cart.css';
import Checkout from "./Checkout";

const Cart = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        setItems(getCartItem());
    }, []);

    const showItems = (items) => {
        return (
            <div  >
                <h2 style={{padding: '10px'}}> Your Cart has {items.length} Items</h2>
                
                <div className="cartStyle">
                {items.map((product, i) => {
                    return (
                        <Card key={i} product={product} showAddToCartButton={false} cartUpdateButton={true} showRemoveButton={true}/>
                    );
                })}
                </div>
            </div>
        );
    }

    const noItemMessage = () => {
        return (
            <h2>
                Your Cart is Empty.. <Link to='/shop'>Continue Shopping</Link>
            </h2>
        );
    }

    return (
        <div>
            <Menu />

            <Layout
                title="Shopping Cart"
                description="Manage Your Cart Product List Here And Checkout"
                className="container-fluid"
            />
              
              <div className="topdiv">
                <div>
               {items.length > 0 ? showItems(items) : noItemMessage()}
               </div>
               <div>
               <Checkout products={items}/>
               </div>

               </div>
        </div>

    );

}

export default Cart;