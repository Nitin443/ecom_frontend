import React, { useEffect, useState } from 'react';
import Layout from '../core/Layout';
import Menu from '../core/Menu';
import { useParams } from 'react-router-dom';
import { addProduct, getCategory, getSingleProduct, updateProduct } from './adminApi';


function UpdateProduct() {


    const token = localStorage.getItem("token");
    const { productId } = useParams();

    const [values, setValues] = useState({
        name: '',
        description: '',
        categories: [],
        category: '',
        shippy: '',
        quantity: '',
        price: '',
        image: '',
        laoding: false,
        error: '',
        createdProduct: '',
        redirectToProfile: false,
        formData: '',
        url: ''
    });

    const {
        name,
        description,
        categories,
        category,
        shippy,
        price,
        quantity,
        image,
        laoding,
        error,
        createdProduct,
        redirectToProfile,
        formData, 
        url
    } = values;

    

    const initCategory = async () => {
        const categorys = await getCategory(token);
        console.log(categorys);
        if (categorys.errorMessage) {
            setValues({ ...values, error: categorys.errorMessage });
        } else {
            setValues({categories: categorys.Category, formData: new FormData() });
        }
    }

    const init = async (productId) => {
       const proDetails = await getSingleProduct(productId);
       if(proDetails.errorMessage){
           setValues({...values, error:proDetails.errorMessage });
       }else{
           setValues({...values, name: proDetails.Product.name, description: proDetails.Product.description, price: proDetails.Product.price,
            category: proDetails.Product.category._id, shippy: proDetails.Product.shippy, url: proDetails.Product.url,
            quantity: proDetails.Product.quantity, formData: new FormData()
        });
        initCategory();
       }
    }

    useEffect(() => {
        init(productId);
    }, []);

    const handleChange = (name) => (event) => {
        const value = name === 'image' ? event.target.files[0] : event.target.value;
        formData.set(name, value);
        setValues({ ...values, [name]: value });
    }

    const clickSubmit = async (event) => {
        event.preventDefault();
        setValues({ ...values, error: '', laoding: true });

        const result = await updateProduct(token, productId, formData);
        console.log(result);
        if (result.errorMessage) {
            setValues({ ...values, error: result.errorMessage });
        } else {
            setValues({ ...values, name: '', description: '', price: '', quantity: '', image: '', laoding: false });
        }


    }

    const newPostForm = () => {
        return (
            <div className='container mb-10'>
            <form onSubmit={clickSubmit} className="mb-3">
                <h4>Product Photo</h4>
                <div className='form-group'>
                    <label className='btn btn-primary'>
                        <input onChange={handleChange('image')} type='file' name='image' accept='image/*' />
                    </label>
                </div>

                <div className='form-group'>
                    <label className='text-muted'> Product Image Url</label>
                    <input onChange={handleChange('url')} type='text' className='form-control' value={url} />
                </div>

                <div className='form-group'>
                    <label className='text-muted'> Product Name</label>
                    <input onChange={handleChange('name')} type='text' className='form-control' value={name} />
                </div>

                <div className='form-group'>
                    <label className='text-muted'>Product Description</label>
                    <input onChange={handleChange('description')} type='text' className='form-control' value={description} />
                </div>

                <div className='form-group'>
                    <label className='text-muted'>Product Category</label>
                    <select onChange={handleChange('category')} className='form-control' >
                        <option value='1'>Please Select</option>

                        {categories && categories.map((c,i) => {
                            return (
                                <option key={i} value={c._id}>{c.name}</option>
                            );
                        })}
                    </select>
                </div>

                <div className='form-group'>
                    <label className='text-muted'>Product Price</label>
                    <input onChange={handleChange('price')} type='number' className='form-control' value={price} />
                </div>

                <div className='form-group'>
                    <label className='text-muted'>Product Quantity</label>
                    <input onChange={handleChange('quantity')} type='number' className='form-control' value={quantity} />
                </div>

                <div className='form-group'>
                    <label className='text-muted'>Product Shipping</label>
                    <select onChange={handleChange('shippy')} className='form-control' >
                        <option value='1'>Please Select</option>
                        <option value='1'>Yes</option>
                        <option value='0'>No</option>
                    </select>
                </div>
                <button className='btn btn-primary'>Update Product</button>

            </form>
            </div>
        );
    }

    return (
        <div>
            <Menu />
            <Layout title="Add Product" description={`Add a New Product`} className="container">

                {newPostForm()}

            </Layout>
        </div>
    );
}

export default UpdateProduct;