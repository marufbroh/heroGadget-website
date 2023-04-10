import React, { useContext } from 'react';
import ProductCard from './Cards/ProductCard';
import { addToDb } from '../utils/fakeDB';
import { CartContext, ProductsContext } from '../App';
import { toast } from 'react-hot-toast';

const Shop = () => {
    const products = useContext(ProductsContext)
    const [cart, setCart] = useContext(CartContext || [])

    const handleAddToCart = (product) => {
        let newCart = []
        const exists = cart.find(
            existingProduct => existingProduct.id === product.id
        )
        if (!exists) {
            product.quantity = 1
            newCart = [...cart, product]
        } else {
            exists.quantity = exists.quantity + 1
            const rest = cart.filter(
                existingProduct => existingProduct.id !== product.id
            )
            newCart = [...rest, exists]
        }

        setCart(newCart)
        addToDb(product.id)
        toast.success('Product Added! 🛒', { autoClose: 500 })
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