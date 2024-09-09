import React, { useEffect, useState } from 'react'


const CartItemCard = (props) => {
    const {product,index,handleIncrease,handleDecrease,handleRemove ,subtotal_price} = props;
    const {id,flavor,image,size,price,quantity,title}=product

    const mulPrice = Number(price)*Number(quantity)
    
    return (
        <div className="flex justify-between items-center w-full">
            {/* left */}
            <div className="flex justify-start items-center w-full">
                <img src={image} className="h-[100px] w-[100px]" alt="" />
                <div className="flex flex-col justify-between items-center p-2">
                    <h1 className='text-[16px] md:text-[20px] font-semibold'>{title}</h1>
                    <div className='flex flex-col md:flex-row justify-center items-center italic gap-2'>
                        {
                            size && <h2>Volume: {size}ml </h2>
                        }
                        {
                            flavor && <h2>Flavor : {flavor}</h2>
                        }
                    </div>
                    
                    <div className="italic text-[16px] flex justify-center items-center px-4  rounded-2xl border-2 border-accent">
                        <button onClick={() => handleDecrease(index)} className="bg-transparent border-none">-</button>
                        <div className="w-8">{quantity}</div>
                        <button onClick={() => handleIncrease(index)} className="bg-transparent border-none">+</button>
                    </div>
                </div>
            </div>
            {/* right */}
            <div className="flex flex-col justify-between items-center gap-6">
                <p className="text-nowrap">BDT {mulPrice}</p>
                <button onClick={() => handleRemove(index)}>
                    <img src="/src/assets/icons/remove.png" alt="" />
                </button>
            </div>

        </div>
    )
}

export default CartItemCard