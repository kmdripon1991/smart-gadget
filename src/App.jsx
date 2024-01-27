import React, { useState } from "react";
import Header from "./components/Header";
import { Outlet, useLoaderData } from "react-router-dom";
import Footer from "./components/Footer";
import { createContext } from "react";

export const ProductContext = createContext([]);
export const CartContext = createContext([]);

const App = () => {
  const { initialCart, products } = useLoaderData();
  const [cart, setCart] = useState(initialCart)

  return (
    <ProductContext.Provider value={products}>
      <CartContext.Provider value={[cart, setCart]}>
        <Header />
        <div className="min-h-[calc(100vh-96px)]">
          <Outlet />
        </div>
        <Footer />
      </CartContext.Provider>
    </ProductContext.Provider>
  );
};

export default App;
