import React from 'react';

const SingleProduct = ({product, handleAddToCart}) => {
    const {name, category, price, picture}=product
    return (
        <div className='bg-gray-100 p-6 rounded shadow-lg'>
            <img className='object-cover rounded-lg shadow-lg w-full h-56 mb-6 md:h-64 lg:h-80' src={picture} alt="" />
            <h2 className='text-xl font-bold mb-2 leading-none sm:text-2xl'>{name}</h2>
            <p className='text-gray-700'>Category: {category}</p>
            <p className='text-gray-700 font-bold'>Price: ${price}</p>
            <button onClick={()=>handleAddToCart(product)} className='btn-primary w-full block'>Add To Cart</button>
        </div>
    );
};

export default SingleProduct;