import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isAuthenticate } from './index';

const role = localStorage.getItem("role");

const AdminRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} children={props => (isAuthenticate() && role === "1") ? (<Component {...props} />) : 
    (<Redirect to={{ pathname: '/login', state: { from: props.location } }} />)}

    />
);

export default AdminRoute;