import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { logout, isAuthenticate } from '../authApi';
import Shop from './Shop';

import { itemTotal } from './cartHelper';
import './Menu.css';
import {
    HomeOutlined,
    ShopOutlined,
    ShoppingCartOutlined,
    LoginOutlined,
    LogoutOutlined,
    DashboardOutlined,
    UserAddOutlined
  } from '@ant-design/icons';

const isActive = (history, path) => {
    if (history.location.pathname === path) {
        return { color: '#ff9900' }
    } else {
        return { color: '#ffffff' }
    }
}

function Menu({ history }) {

    const role = localStorage.getItem("role");

    return (
        <div>

            <ul className='nav nav-tabs bg-primary'>

                <li className='nav-item'>
                    <Link className='nav-link' to='/' style={isActive(history, '/')}><HomeOutlined   className='logoStyle'/></Link>
                </li>

                <li className='nav-item'>
                    <Link className='nav-link' to='/shop' style={isActive(history, '/shop')}><ShopOutlined className='logoStyle' /></Link>
                </li>

                <li className='nav-item'>
                    <Link className='nav-link' to='/cart' style={isActive(history, '/cart')}><ShoppingCartOutlined className='logoStyle' />{" "}
                    <sup>
                        <small className='cart-badge'>{itemTotal()}</small>
                    </sup>
                    </Link>
                </li>


                {(isAuthenticate() && role === "0") && (<li className='nav-item'>
                    <Link className='nav-link' to='/user/dashboard' style={isActive(history, '/user/dashboard')}><DashboardOutlined  className='logoStyle' /></Link>
                </li>)}

                {(isAuthenticate() && role === "1") && (<li className='nav-item'>
                    <Link className='nav-link' to='/admin/dashboard' style={isActive(history, '/admin/dashboard')}><DashboardOutlined className='logoStyle'  /></Link>
                </li>)}

                {!isAuthenticate() && (<li className='nav-item'>
                    <Link className='nav-link' to='/signup' style={isActive(history, '/signup')}><UserAddOutlined  className='logoStyle' /></Link>
                </li>)}

                {!isAuthenticate() && (<li className='nav-item'>
                    <Link className='nav-link' to='/login' style={isActive(history, '/login')}><LoginOutlined  className='logoStyle' /></Link>
                </li>)}

                {isAuthenticate() && (<li className='nav-item'>
                    <Link className='nav-link' onClick={logout} style={{ color: 'yellow' }}> <LogoutOutlined className='logoStyle' /></Link>
                </li>)}

            </ul>
            {/* {checkAuth()} <LogoutOutlined /> */}

        </div>
    );
}

export default withRouter(Menu);