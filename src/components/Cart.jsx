import React, { useContext } from "react";
import { deleteFromDb, getStoredCart, removeFromDb } from "../utils/FakeDb";
import { Link, useLoaderData } from "react-router-dom";
import CartItem from "./CartItem";
import { CartContext } from "../App";
import toast from "react-hot-toast";

const Cart = () => {
  const [cart, setCart] = useContext(CartContext);
  //   console.log(initialCart);

  let total = 0;
  if (cart.length > 0) {
    for (const product of cart) {
      const { quantity, price } = product;
      total = total + quantity * price;
      //   console.log(total)
    }
  }

  //   Remove item from shopping cart
  const handleRemoveItem = (id) => {
    const remaining = cart.filter((product) => product.id !== id);
    setCart(remaining);
    removeFromDb(id);
    toast.success("Item Removed");
  };

  const deleteFromCart = () => {
    if(cart.length > 0){
      setCart([])
      deleteFromDb()
      return toast.success("All Items Removed");
    }
  };

  const placeOrderHandler = () => {
    if (cart.length > 0) {
      setCart([]);
      // localStorage.removeItem("shopping-cart");
      deleteFromDb()
      return toast.success("Order Completed");
    }
    return toast.error('Cart is Empty')
  };

  return (
    <div className="flex min-h-screen items-start justify-center bg-gray-100 text-gray-900">
      <div className="flex flex-col max-w-3xl p-6  space-y-4 sm:p-10">
        <h2 className="text-xl font-semibold">
          {cart.length ? "Review Cart Item" : "Cart is Empty"}
        </h2>
        <ul className="flex flex-col divide-y divide-gray-700">
          {cart.map((product) => (
            <CartItem
              key={product.id}
              product={product}
              handleRemoveItem={handleRemoveItem}
            ></CartItem>
          ))}
        </ul>
        <div className="text-right space-y-1">
          <p>
            Total amount: <span className="font-semibold">${total}</span>
          </p>
          <p className="text-sm text-gray-400">
            Not including taxes and shipping costs
          </p>
        </div>
        <div className="flex justify-end space-x-4">
          {cart.length > 0 ? (
            <button className="btn-outlined" onClick={deleteFromCart}>
              Clear Cart
            </button>
          ) : (
            <Link to="/shop" className="btn-outlined">
              Back to Shop
            </Link>
          )}
          <button onClick={placeOrderHandler} className="btn-primary">
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
