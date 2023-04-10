import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductCard from './Cards/ProductCard';

const Shop = () => {
    const products = useLoaderData();

    return (
        <div className='product-container'>
            {
                products.map(product => <ProductCard key={product.id} product={product} />)
            }
        </div>
    );
};

export default Shop;