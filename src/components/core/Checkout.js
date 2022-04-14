import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import useRazorpay from "react-razorpay";
import { useCallback } from "react";
import DropIn from 'braintree-web-drop-in-react';
import { isAuthenticate } from "../authApi";
import { getTreeToken } from './coreApi';
var dropin = require('braintree-web-drop-in');




const Checkout = ({ products }) => {
    const Razorpay = useRazorpay();

    const handlePayment = useCallback(() => {
        // const order = await createOrder(params);
        const key = "rzp_test_F5sIjFw3qbpwNO";
        const options = {
            key: key,
            amount: getTotal()*100,
            currency: "INR",
            name: "Ecom App",
            description: "Test Transaction",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbgsnX1c2t44rNFqGWbnkwjxBvgtTJaJ7LFA&usqp=CAU",
            prefill: {
                name: "Ecom App",
                email: "ecomapp@example.com",
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
                    {/* <DropIn
                        options={{ authorization: data.clinetToken }}
                        onInstance={instance => instance = instance}
                    /> */}
                    <div class="card-body">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                                Products : 
                                <span>₹ {getTotal()}</span>
                            </li>
                            <li class="list-group-item d-flex justify-content-between align-items-center px-0">
                                Shipping Charge : 
                                <span>₹ 0</span>
                            </li>
                            <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                                <div>
                                    <strong>Total amount</strong>
                                    <strong>
                                        <p class="mb-0">(including GST)</p>
                                    </strong>
                                </div>
                                <span><strong>₹ {getTotal()}</strong></span>
                            </li>
                        </ul>

                        <button  onClick={handlePayment} type="button" class="btn btn-primary btn-lg btn-block">
                            Make purchase
                        </button>
                    </div>

                </div>
            );
        } else {
            return (
                <h2>Loading...</h2>
            );
        }
    }

    const showCheckoutButton = () => {
        return (isAuthenticate() ? <div>{showDropIn()}</div> : <Link to='/login'>
            <button className="btn btn-primary">Log in to Checkout</button>
        </Link>);

    }

    return (
        <div>
            <h2>All Products Order Details</h2>
            {showCheckoutButton()}
        </div>
    );
}

export default Checkout;