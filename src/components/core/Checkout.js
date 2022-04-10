import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import DropIn from 'braintree-web-drop-in-react';
import { isAuthenticate } from "../authApi";
import { getTreeToken } from './coreApi';
var dropin = require('braintree-web-drop-in');

// braintree.dropin.create({
//     authorization: "CLIENT_AUTHORIZATION"
//   }, callback);


const Checkout = ({ products }) => {

    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");

    const [data, setData] = useState({
        success: false,
        clinetToken: null,
        error: '',
        instance: {},
        address: ''
    });

  

    //   dropin.create({ /* options */ }, callback);

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
                    <button className="btn btn-success">Checkout</button>
                </div>
            );
        }else{
            return(
            'ok'
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