import { getCategory } from './coreApi';
import { useState, useEffect } from 'react';
import Card from './Card';
import './Card.css';
import { list } from './coreApi';
import './Home.css';

const Search = () => {

    const token = localStorage.getItem("token");

    const[data, setData] = useState({
      categories: [],
      category: '',
      search: '',
      results: [],
      searched: false
    });

    const[error, setError] = useState(false);

    const {categories, category, search, results, searched} = data;

    const loadCategories = async () => {
        const categorys = await getCategory(token);
        console.log(categorys);
        if (categorys.errorMessage) {
            setError(categorys.errorMessage);
        } else {
            setData({...data, categories: categorys.Category});
        }
    }

    useEffect(() => {
        loadCategories();
    }, []);


    const searchProducts = (results = []) => {
          return (
              <div className='row'>
               {results.map((product ,i) => {
                return(
                  <Card key={i} product={product} />
                );
               })}
              </div>
          );  
    }

    const searchData = async () => {
        console.log(search, category);

        if(search){
            const productList = await list({search: search || undefined, category: category});
            if(productList.errorMessage){
                setError(productList.errorMessage);
            }else{
                setData({...data, results: productList.ProductList});
            }
            console.log(productList.ProductList)
        }

    }

    const searchSubmit = (e) => {
       e.preventDefault();
       
       searchData();

    }

    const handleChange = (name) => (event) => {
        setData({...data, [name]: event.target.value, searched: false});
    }


    const searchForm = () => {
        return (
            <form onSubmit={searchSubmit}>
                <span className='input-group-text'>
                    <div className='input-group input-group-lg'>
                        <div className='input-group-prepend'>
                            <select className='btn mr-2' onChange={handleChange('category')}>
                              <option value='All'>Pick Category</option>
                              {categories.map((c, i) => {
                                  return (
                                      <option key={i} value={c._id}>{c.name}</option>
                                  );
                              })};
                            </select>
                        </div>
                        <input type='search' className='form-control' onChange={handleChange('search')} placeholder='Search By Name'/>
                    </div>
                    <div className='btn input-group-append' style={{border: 'none'}}>
                     <button className='input-group-text'>Search</button>
                    </div>
                </span>
            </form>
        );
    }

   return (
       <div className=''>
           <div className='searchForm'>{searchForm()}</div>
           <div className='container-fluid mb-3'>
              {searchProducts(results)}
           </div>
       </div>
   );

}

export default Search;