import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import SingleProduct from "./SingleProduct";

const Shop = () => {
  const products = useLoaderData();

  const handleAddToCart = (product) => {
    console.log("btn clicked");
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
