import React, { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import SingleProduct from "./SingleProduct";
import { addToDb } from "../utils/FakeDb";
import { CartContext, ProductContext } from "../App";
import toast from "react-hot-toast";

const Shop = () => {
  const products = useContext(ProductContext);
  const [cart, setCart] = useContext(CartContext);
  // console.log(products)
  const handleAddToCart = (product) => {
    let newCart = [];
    const exists = cart.find(cartItem => cartItem.id === product.id);

    if (!exists) {
      product.quantity = 1;
      newCart = [...cart, product];

      // console.log(cart)
    } else {
      const rest = cart.filter(cartItem => cartItem.id !== product.id);
      exists.quantity = exists.quantity + 1;
      newCart = [...rest, exists]
      
    }

    // console.log(exists)
    setCart(newCart);
    addToDb(product.id);
    toast.success('Product added')
  };

  return (
    <div className="my-container">
      <div className="product-container">
        {products.map((product) => (
          <SingleProduct
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          ></SingleProduct>
        ))}
      </div>
    </div>
  );
};

export default Shop;
