import React from 'react';
import Menu from '../core/Menu';
import Layout from '../core/Layout';
import { Link } from 'react-router-dom';


const AdminDashboard = () => {
 
  //  get values from local storage
  const name = localStorage.getItem("name");
  const email = localStorage.getItem("email");
  const role = localStorage.getItem("role");
  const Id = localStorage.getItem("userId");

  const adminLinks = () => {
      return (
          <div className='card'>
           <h4 className='card-header'>Admin Links</h4>
           <ul className='list-group'>
                <li className='list-group-item'>
                    <Link className='nav-Link' to="/create/category">
                      Create Category
                    </Link>
                </li>
                <li className='list-group-item'>
                    <Link className='nav-Link' to="/crete/product">
                      Create Product
                    </Link>
                </li>
                <li className='list-group-item'>
                    <Link className='nav-Link' to="/admin/products">
                      Manage Products
                    </Link>
                </li>
                <li className='list-group-item'>
                    <Link className='nav-Link' to="#">
                      Orders
                    </Link>
                </li>
                </ul>
          </div>
      );
  };

  const adminInfo = () => {
  return(
    <div className='card mb-5'>
    <h3 className='card-header'>Admin Information</h3>
    <ul className='list-group'>
    <li className='list-group-item'>UserId : {Id}</li>
    <li className='list-group-item'>Name : {name}</li>
    <li className='list-group-item'>Email: {email}</li>
    <li className='list-group-item'>Role : {role === "0" ? 'User' : 'Admin'} </li>

    </ul>

    </div>
  );
  };

    return (
        <div>
            <Menu />
            <Layout title="Admin Dashboard" description={`Hello ${name} Welcome to your dashboard`} className="container" >

             <div className='row'>
             
             <div className='col-3'>
                 {adminLinks()}
             </div>

             <div className='col-9'>
                 {adminInfo()}
             </div>

             </div>   
             </Layout>

        </div>

    );
}

export default AdminDashboard;