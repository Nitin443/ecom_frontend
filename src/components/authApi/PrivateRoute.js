import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isAuthenticate } from './index';

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} children={props => isAuthenticate() ? (<Component {...props} />) : 
    (<Redirect to={{ pathname: '/login', state: { from: props.location } }} />)}

    />
);

export default PrivateRoute;