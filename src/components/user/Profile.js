import React, { useEffect, useState } from 'react';
import Menu from '../core/Menu';
import Layout from '../core/Layout';
import { getUserProfile, updateUserProfile, updateUserLocally } from './apiUser';
import { useParams } from 'react-router-dom';

const Profile = () => {
 
    const[values, setValues] = useState({
        name: '',
        email: '',
        password: '',
        error: false,
        success: false
    });

    const { userId } = useParams();
    const token = localStorage.getItem("token");

    const {name, email, password, error, success} = values;

    const init = async (userId) => {
       const userData = await getUserProfile(token);
       if(userData.errorMessage){
           setValues({...values, error: true});
       }else{
           setValues({...values, name: userData.UserDetails.name, email: userData.UserDetails.email});
       }
    }

    useEffect(() => {
       init(userId)
    }, []);

    const handleChange = (name) => (e) => {
        setValues({...values, error: false, [name]: e.target.value });
    };

    const formSubmit = async (event) => {
        event.preventDefault();
        const updateData = await updateUserProfile(token, {name, email, password});
        if(updateData.errorMessage){
            console.log(updateData.errorMessage);
        }else{
            const updateLocally =  updateUserLocally(updateData.UpdateUserDetails);
        }
    };


    const profileUpdate = (name, email, password) => {
        return(
        <form>
            <div className='form-group'>
            <label className='text-muted'>Name</label>
            <input type='text' onChange={handleChange('name')} className='form-control'  value={name}/>
            </div>

            <div className='form-group'>
            <label className='text-muted'>Email</label>
            <input type='email' onChange={handleChange('email')} className='form-control' value={email}/>
            </div>

            <div className='form-group'>
            <label className='text-muted'>Password</label>
            <input type='password' onChange={handleChange('password')} className='form-control' value={password}/>
            </div>

            <button onClick={formSubmit}  type='submit' className='btn btn-primary'>Update Profile</button>

        </form>
        );
    }

  return(
      <div>
      <Menu />
            <Layout title="Profile Page" description='Here Manage your Profile' className="container"></Layout>
          <div className='container'>
          {profileUpdate(name, email, password)}

          </div>
      </div>
  );
}

export default Profile;