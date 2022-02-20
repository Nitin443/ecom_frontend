import React from 'react';
import Layout from './Layout';
import Menu from './Menu';
import { API } from '../../config';

function Home() {
    return (
        <div>

        <Menu />
        
         <Layout 
             title="Home page"
             description="welcome at home page"
         />

         {API}

        </div>
    );
}

export default Home;