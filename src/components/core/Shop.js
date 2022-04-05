import Layout from './Layout';
import Menu from './Menu';
import { getCategory } from './coreApi';
import { useState, useEffect } from 'react';
import Checkbox from './Checkbox';
import { prices } from './fixedPrices';
import Radiobox from './Radiobox';
import { getFilterProducts } from './coreApi';
import Card from './Card';
import './Card.css';
import { getProduct } from './coreApi';
import './Shop.css';

const Shop = () => {
    const token = localStorage.getItem("token");

    const [myFilter, setMyFilter] = useState({
        filter: { category: [], price: [] }
    });
    const [category, setCategory] = useState([]);
    const [error, setError] = useState(false);
    const [limit, setLimit] = useState(4);
    const [skip, setSkip] = useState(4);
    const [filterResult, setFilterResult] = useState([]);

    const init = async () => {
        const categorys = await getCategory(token);
        console.log(categorys);
        if (categorys.errorMessage) {
            setError(categorys.errorMessage);
        } else {
            setCategory(categorys.Category);
        }
    }

    const loadFilterResults = async (newFilter) => {
        console.log(newFilter);
        const products = await getFilterProducts(limit, skip, newFilter);
        if (products.errorMessage) {
            setError(products.errorMessage);
        } else {
            setFilterResult(products.SearchProduct);
            console.log(filterResult);
        }
    };

    const loadProductsByArrival = async () => {
        const products = await getProduct('createdAt');
        console.log(products);
        if (products.errorMessage) {
            setError(products.errorMessage);
        } else {
            setFilterResult(products.ProductList)
        }
    }

    useEffect(() => {
        init();
        loadProductsByArrival();
    }, []);


    const handleFilters = (filter, filterBy) => {
        console.log(filter, filterBy);
        const newFilter = { ...myFilter };
        newFilter.filter[filterBy] = filter;

        if (filterBy === 'price') {
            let priceValue = handlePrice(filter);
            newFilter.filter[filterBy] = priceValue;
        }

        loadFilterResults(myFilter.filter);

        setMyFilter(newFilter);
    }

    const handlePrice = (value) => {
        const data = prices;
        let array = [];

        for (let key in data) {
            if (data[key]._id === parseInt(value)) {
                array = data[key].array;
            }
        }
        return array;
    };




    return (
        <div>
            <Menu />

            <Layout
                title="Shop Page"
                description="Search And Filter Products For Shopping With Best Price"
                className="container-fluid"
            />
            <div className='shopStyle'>
                <div className=''>
                    <h4>Filter By Categories</h4>
                    <ul>
                        <Checkbox categories={category}
                            handlefilters={filter => handleFilters(filter, 'category')}
                        />
                    </ul>

                    <h4>Filter By Price Range</h4>
                    <ul>
                        <Radiobox prices={prices}
                            handlefilters={filter => handleFilters(filter, 'price')}
                        />
                    </ul>

                </div>
                <div className=' container'>

                    <h4 className='mb-4'>Products List</h4>
                    <div className='productStyles'>
                        {filterResult.map((product, i) => {
                            return (
                                <Card key={i} product={product} />
                            );
                        })}

                    </div>

                </div>
            </div>
        </div>
    );
}

export default Shop;

//filterResult