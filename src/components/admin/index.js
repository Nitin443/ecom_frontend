import React, { useState } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isAuthenticate } from './index';
import { Link } from 'react-router-dom';
import Layout from '../core/Layout';
import Menu from '../core/Menu';
import { creatCategory } from './adminApi';

function AddCategory() {

    const token = localStorage.getItem("token");
    const Id = localStorage.getItem("userId");

    const [name, setName] = useState('');
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);

    const handleChange = (e) => {
        setError('')
        setName(e.target.value)
    }

    const clickSubmit = async (e) => {
        e.preventDefault()
        setError('')
        setSuccess(false)

        const result = await creatCategory(token, { name });
        console.log(result);
        if (result.error) {
            setError(result.error);
        } else {
            setError('');
            setSuccess(true);
        }
    }

    const showSuccess = () => {
        if (success) {
            return <h3 className='text-success'>{name} is created</h3>
        }
    }

    const showError = () => {
        if (error) {
            return <h3 className='text-danger'>category is not created</h3>
        }
    }

    const newCategoryForm = () => {
        return (
            <form onSubmit={clickSubmit}>
                <div className='form-group'>
                    <label className='text-muted'>Name</label>
                    <input type='text' className='form-control' onChange={handleChange} value={name} autoFocus />
                </div>
                <button className='btn btn-outline-primary'>Create Category</button>
            </form>
        );
    };

    return (
        <div>
            <Menu />
            <Layout title="Create Category" description={`Create a New Product Category`} className="container">

                <div className='row'>
                    {showError()}
                    {showSuccess()}
                    <div className='col-md-8 offset-md-2'>

                        {newCategoryForm()}
                    </div>

                </div>

            </Layout>
        </div>
    );

}

export default AddCategory;