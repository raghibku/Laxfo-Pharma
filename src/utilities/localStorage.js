const getStoredCart = () => {
    const storedCartString = localStorage.getItem('cart');
    if (storedCartString) {
        return JSON.parse(storedCartString);
    }
    return [];
}

const increaseQuantity = (index) => {
    const cart = getStoredCart();
    cart[index].quantity += 1; // Increase the quantity of the item at this index
    saveCartToLS(cart);
};
const decreaseQuantity = (index) => {
    const cart = getCart();
    if (cart[index].quantity > 1) {
        cart[index].quantity -= 1; // Decrease the quantity of the item at this index
        saveCart(cart);
    } else {
        removeFromCart(index); // Optionally remove item if quantity goes below 1
    }
};
const removeFromCart = (index) => {
    const cart = getCart();
    const updatedCart = cart.filter((_, i) => i !== index);
    saveCart(updatedCart);
};

const saveCartToLS = cart => {
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringified);
}

// const saveOrderToLS = order => {
//     const orderStringified = JSON.stringify(order);
//     console.log(orderStringified)
//     localStorage.setItem('order',orderStringified);
// }

const addToLS = newCartItem => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Check if the item already exists in the cart (matching by id, size, and flavor)
    const existingItemIndex = cart.findIndex(
        (item) =>
            item.id === newCartItem.id &&
            item.size === newCartItem.size &&
            item.flavor === newCartItem.flavor
    );

    if (existingItemIndex !== -1) {
        // If item exists, increase its quantity
        cart[existingItemIndex].quantity += 1;
    } else {
        // If item does not exist, add it to the cart
        cart.push(newCartItem);
    }

    // Update localStorage with the new cart
    localStorage.setItem('cart', JSON.stringify(cart));

    console.log("Cart updated:", cart); // Optional: To see the cart in console
}




export { addToLS, getStoredCart, increaseQuantity, decreaseQuantity,removeFromCart }