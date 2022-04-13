import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import useRazorpay from "react-razorpay";
import { useCallback } from "react";
import DropIn from 'braintree-web-drop-in-react';
import { isAuthenticate } from "../authApi";
import { getTreeToken } from './coreApi';
import { PAYMTKEY } from '../../config';
var dropin = require('braintree-web-drop-in');




const Checkout = ({ products }) => {
    const Razorpay = useRazorpay();

    const handlePayment = useCallback(() => {
       // const order = await createOrder(params);
        const options = {
          key: PAYMTKEY,
          amount: "3000",
          currency: "INR",
          name: "Acme Corp",
          description: "Test Transaction",
          image: "https://example.com/your_logo",
          prefill: {
            name: "Piyush Garg",
            email: "youremail@example.com",
            contact: "9999999999",
          },
          notes: {
            address: "Razorpay Corporate Office",
          },
          theme: {
            color: "#3399cc",
          },
        };
    
        const rzpay = new Razorpay(options);
        rzpay.open();
      }, [Razorpay]);

    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");

    const [data, setData] = useState({
        success: false,
        clinetToken: null,
        error: '',
        instance: {},
        address: ''
    });

  

    const getToken = async (userId, token) => {
        const result = await getTreeToken(userId, token);
        if (result.error) {
            setData({ ...data, error: result.error });
        } else {
            setData({ ...data, clinetToken: result.clinetToken });
        }
    }

    useEffect(() => {
        getToken(userId, token);
    }, []);

    const getTotal = () => {
        return products.reduce((currentValue, nextValue) => {
            return currentValue + nextValue.count * nextValue.price;
        }, 0);
    }

      

    const showDropIn = () => {
        if (data.clinetToken !== null) {
            return (
                <div>
                    <DropIn
                        options={{ authorization: data.clinetToken }}
                        onInstance={instance => instance = instance}
                    />
                    <button style={{margin: '1rem'}} className="btn btn-primary">Checkout</button>
                    <button onClick={handlePayment} className="btn btn-success">Pay Now</button>
                </div>
            );
        }else{
            return(
            <h2>Loading...</h2>
            );
        }
        // return(
        //     <div>
        //         {products.length > 0 ? (
        //             <div>
        //                 <DropIn options={{
        //                     authorization: data.clinetToken
        //                 }} onInstance={instance => instance = instance}
        //                 />
        //             <button className="btn btn-success">Checkout</button>
        //             </div>
        //         ) : ' ok'}
        //     </div>
        // );
    }

    const showCheckoutButton = () => {
        return (isAuthenticate() ? <div>{showDropIn()}</div> : <Link to='/login'>
            <button className="btn btn-primary">Log in to Checkout</button>
        </Link>);

    }

    return (
        <div>
            <h2>Total Amount : ₹ {getTotal()}</h2>
            {showCheckoutButton()}
        </div>
    );
}

export default Checkout;