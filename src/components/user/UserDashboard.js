import React from 'react';
import Menu from '../core/Menu';
import Layout from '../core/Layout';
import { Link } from 'react-router-dom';

const Dashboard = () => {
 
  //  get values from local storage
  const name = localStorage.getItem("name");
  const email = localStorage.getItem("email");
  const role = localStorage.getItem("role");
  const Id = localStorage.getItem("userId");

  const userLinks = () => {
      return (
          <div className='card'>
           <h4 className='card-header'>User Links</h4>
           <ul className='list-group'>
                <li className='list-group-item'>
                    <Link className='nav-Link' to="/card">
                      My Card
                    </Link>
                </li>
                <li className='list-group-item'>
                    <Link className='nav-Link' to="/updateProfile">
                      Update Profile
                    </Link>
                </li>
                </ul>
          </div>
      );
  };

  const userInfo = () => {
  return(
    <div className='card mb-5'>
    <h3 className='card-header'>User Information</h3>
    <ul className='list-group'>
    <li className='list-group-item'>UserId : {Id}</li>
    <li className='list-group-item'>Name : {name}</li>
    <li className='list-group-item'>Email: {email}</li>
    <li className='list-group-item'>Role : {role === "0" ? 'User' : 'Admin'} </li>

    </ul>

    </div>
  );
  };

  const purchaseHistory = () => {
  return (
    <div className='card mb-5'>
    <h3 className='card-header'>Purchase History</h3>
    <ul className='list-group'>
    <li className='list-group-item'>UserId : {Id}</li>

    </ul>

    </div>
  );
  };

    return (
        <div>
            <Menu />
            <Layout title="Dashboard" description={`Hello ${name} Welcome to your dashboard`} className="container">

             <div className='row'>
             
             <div className='col-3'>
                 {userLinks()}
             </div>

             <div className='col-9'>
                 {userInfo()}
                 {purchaseHistory()}
             </div>

             </div>   

            </Layout>
        </div>

    );
}

export default Dashboard;