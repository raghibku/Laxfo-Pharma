import { useEffect, useState } from "react";
import { decreaseQuantity, getStoredCart, removeFromCart } from "../utilities/localStorage"
import CartItemCard from "./CartItemCard"
import { increaseQuantity } from '../utilities/localStorage';

const Cart = () => {

    const [storedCartItems, setStoredCartItems] = useState([])

    const handleIncrease = (index) => {
        const updatedCart = [...storedCartItems];
        updatedCart[index].quantity += 1;
        setStoredCartItems(updatedCart);
        increaseQuantity(index)
        setStoredCartItems(getStoredCart());
    }

    const handleDecrease = (index) => {
        const updatedCart = [...storedCartItems];
        if (updatedCart[index].quantity > 1) {
            updatedCart[index].quantity -= 1;
            setStoredCartItems(updatedCart);
            decreaseQuantity(index);
        }
    };

    const handleRemove = (index) => {
        const updatedCart = storedCartItems.filter((_, i) => i !== index);
        setStoredCartItems(updatedCart);
        removeFromCart(index);
    };

    const calculateSubtotal = () => {
        return storedCartItems.reduce((total, item) => {
            return total + item.price * item.quantity;
        }, 0);
    };

    useState(() => {
        setStoredCartItems(getStoredCart())
    }, [])

    const st = calculateSubtotal()
    const no_of_items = storedCartItems.length

    return (
        <div className="gap-4 pt-10 mb-20 flex flex-col justify-start items-center absolute top-0 left-0 w-full h-screen bg-[#f2ebe0]">
            <div className="w-full md:w-[450px] relative text-center px-4">
                <h1 className="text-[24px] pb-10">Shopping Cart</h1>
                <div className="w-full flex flex-col justify-start items-start">
                    <h2 className="text-[24px] font-semibold text-center w-full">Added Items : {no_of_items}</h2>
                    <div className="flex flex-col justify-start items-center gap-4 w-full border-2">
                        {/* cartItem */}
                        {
                            storedCartItems.map((item, index) => {
                                return (
                                    <CartItemCard
                                        index={index}
                                        product={item}
                                        handleIncrease={handleIncrease}
                                        handleDecrease={handleDecrease}
                                        handleRemove={handleRemove}


                                    />
                                )
                            })
                        }

                    </div>
                </div>
                <div className="flex flex-col justify-center items-center w-full pt-10 pb-80 gap-4 bg-nav-bg">
                    <h2 className="text-[24px] text-end italic">Subtotal Price  {st}</h2>
                    <button className="w-full py-[5px] text-center rounded-2xl bg-accent text-white">Checkout</button>
                </div>
            </div>
        </div>
    )
}

export default Cart