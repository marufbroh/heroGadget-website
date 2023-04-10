import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductCard from './Cards/ProductCard';
import { addToDb } from '../utils/fakeDB';

const Shop = () => {
    const products = useLoaderData();

    const handleAddToCart = (id) => {
        // console.log("🚀 ~ file: Shop.jsx:9 ~ handleAddToCart ~ id:", id)
        addToDb(id)
    }

    return (
        <div className='my-container'>
            <div className='product-container'>
                {
                    products.map(product => <ProductCard key={product.id} product={product} handleAddToCart={handleAddToCart} />)
                }
            </div>
        </div>
    );
};

export default Shop;