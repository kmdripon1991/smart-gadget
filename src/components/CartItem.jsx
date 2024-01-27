import React from 'react';
import { TrashIcon } from '@heroicons/react/24/solid'
import { removeFromDb } from '../utils/FakeDb';

const CartItem = ({product, handleRemoveItem}) => {
    const {id, name, picture, price, quantity} = product
    // console.log(picture)
    return (
        <li className='flex flex-col py-6 sm:flex-row sm:justify-between'>
            <div className='flex w-full space-x-2 sm:space-x-4'>
                <img className='flex-shrink-0 object-cover w-20 h-20 border-transparent rounded outline-none sm:w-32 sm:h-32 bg-gray-600' src={picture} alt="" />
                <div className='flex flex-col justify-between w-full pb-4'>
                    <div className='flex justify-between w-full pb-2 space-x-2'>
                        <div className='space-y-1'>
                            <h3 className='text-lg font-semibold leading-snug sm:pr-8'>{name}</h3>
                            <p className='text-sm text-gray-400 '>Quantity: {quantity}</p>
                        </div>
                        <div className='text-right space-y-1'>
                            <p className='text-lg font-semibold'>${price}</p>
                            <p className='text-sm text-gray-600'>Total: ${quantity * price}</p>
                        </div>
                    </div>
                    <div className='flex text-sm divide-x'>
                        <button onClick={()=>handleRemoveItem(id)} className='flex items-center px-2 py-1 pl-0 space-x-1'>
                            <TrashIcon className='w-4 h-4 fill-current text-gray-400'/>
                            <span>Remove</span>
                        </button>
                    </div>
                    
                </div>
            </div>
        </li>
    );
};

export default CartItem;