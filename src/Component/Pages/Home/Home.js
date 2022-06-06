import React from 'react';
import { Helmet } from 'react-helmet-async';
import Banner from './Banner';
import Feature from './Feature';
import StockHome from './StockHome';
import Work from './Work';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>:: Welcome to Warehouse ::</title>
            </Helmet>
            <Banner/>
            <Feature/>
            <StockHome/>
            <Work/>
        </div>
    );
};

export default Home;