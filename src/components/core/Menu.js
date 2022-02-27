import React, {useState} from 'react';
import {Link, withRouter} from 'react-router-dom';
import { logout, isAuthenticate } from '../authApi';

const isActive = (history, path) => {
    if(history.location.pathname === path){
        return {color: '#ff9900'}
    }else{
        return {color: '#ffffff'}
    }
}

function Menu({ history }){

    return(
        <div>

        <ul className='nav nav-tabs bg-primary'>

        <li className='nav-item'>
         <Link className='nav-link' to='/'  style={isActive(history, '/')}>Home</Link>
        </li>

        <li className='nav-item'>
         <Link className='nav-link' to='/dashboard'  style={isActive(history, '/dashboard')}>Dashboard</Link>
        </li>

        {!isAuthenticate() && (<li className='nav-item'>
         <Link className='nav-link' to='/signup'  style={isActive(history, '/signup')}>Signup</Link>
        </li> )}

       {!isAuthenticate() && (<li className='nav-item'>
         <Link className='nav-link' to='/login'  style={isActive(history, '/login')}>Login</Link>
        </li> )}

        {isAuthenticate() &&  (<li className='nav-item'>
         <Link className='nav-link' onClick={logout} style={{color: 'yellow'}}>Logout</Link>
        </li> )}

        </ul>
        {/* {checkAuth()} */}

        </div>
    );
}

export default withRouter(Menu);