import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CartItem from './Cards/CartItem';

const Cart = () => {
    const { savedCarts } = useLoaderData();
    let total = 0;

    for (const product of savedCarts) {
        total = total + product.price * product.quantity
    }
    console.log(total);

    return (
        <div className='flex min-h-screen items-start justify-center bg-gray-100 text-gray-900'>
            <div className='flex flex-col max-w-3xl p-6 space-y-4 sm:p-10'>
                <h2 className='text-xl font-semibold'>
                    {savedCarts.length ? 'Review Cart Items' : 'Cart is EMPTY!'}
                </h2>
                <ul className='flex flex-col divide-y divide-gray-700'>
                    {
                        savedCarts.map(product => <CartItem key={product.id} product={product} />)
                    }
                </ul>
                <div className='space-y-1 text-right'>
                    <p>
                        Total amount: <span className='font-semibold'>{total}$</span>
                    </p>
                    <p className='text-sm text-gray-400'>
                        Not including taxes and shipping costs
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Cart;