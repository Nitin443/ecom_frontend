import { getCategory } from './coreApi';
import { useState, useEffect } from 'react';
import Card from './Card';
import './Card.css';
import { list } from './coreApi';
import './Home.css';

// this component style css in Home.css file

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
              <div>
              <hr />
              <div className='productStyles'>
               {results.map((product ,i) => {
                return(
                  <Card key={i} product={product} />
                );
               })}
              </div>
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
                    <div className=' inputStyle input-group input-group-lg'>
                        <div className=''>
                            <select className='pickCategory btn mr-2' onChange={handleChange('category')}>
                              <option value='All'>Pick Category</option>
                              {categories.map((c, i) => {
                                  return (
                                      <option key={i} value={c._id}>{c.name}</option>
                                  );
                              })};
                            </select>
                        </div>
                        <input type='search' className='form-control searchBox' onChange={handleChange('search')} placeholder='Search Here'/>
                        <div className=''>
                     <button className='btn buttonStyle btn-primary'>Search</button>
                    </div>
                    </div>
                    
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