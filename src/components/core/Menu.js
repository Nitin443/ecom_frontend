import React, {useState} from 'react';
import {Link, withRouter} from 'react-router-dom';
import { logout, isAuthenticate } from '../authApi';
import { isUndefined } from 'lodash';

const isActive = (history, path) => {
    if(history.location.pathname === path){
        return {color: '#ff9900'}
    }else{
        return {color: '#ffffff'}
    }
}

function Menu({ history }){

 const[auth, setAuth] = useState(true);
 const[auth1, setAuth1] = useState(false);

 const checkAuth = () => {
       
    // let checkToken = authenticate();
    // if(checkToken === true){
    //     setAuth(false);
    // }

 }

 

    return(
        <div>

        <ul className='nav nav-tabs bg-primary'>

        <li className='nav-item'>
         <Link className='nav-link' to='/'  style={isActive(history, '/')}>Home</Link>
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