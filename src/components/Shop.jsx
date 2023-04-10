import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductCard from './Cards/ProductCard';

const Shop = () => {
    const products = useLoaderData();

    const handleAddToCart =(id) => {
        console.log("🚀 ~ file: Shop.jsx:9 ~ handleAddToCart ~ id:", id)
    }

    return (
        <div className='product-container'>
            {
                products.map(product => <ProductCard key={product.id} product={product} handleAddToCart={handleAddToCart} />)
            }
        </div>
    );
};

export default Shop;