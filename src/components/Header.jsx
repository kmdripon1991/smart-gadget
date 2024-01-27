import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  Bars3Icon,
  BeakerIcon,
  ShoppingCartIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { CartContext } from "../App";



const Header = () => {

const [cart, setCart] = useContext(CartContext)
  // console.log(cart)

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div className="relative flex items-center justify-between">
        <Link to="/" className="inline-flex items-center">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-cyan-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              fill="currentColor"
              className="flex-shrink-0 w-5 h-5 rounded-full text-cyan-600"
            >
              <path d="M18.266 26.068l7.839-7.854 4.469 4.479c1.859 1.859 1.859 4.875 0 6.734l-1.104 1.104c-1.859 1.865-4.875 1.865-6.734 0zM30.563 2.531l-1.109-1.104c-1.859-1.859-4.875-1.859-6.734 0l-6.719 6.734-6.734-6.734c-1.859-1.859-4.875-1.859-6.734 0l-1.104 1.104c-1.859 1.859-1.859 4.875 0 6.734l6.734 6.734-6.734 6.734c-1.859 1.859-1.859 4.875 0 6.734l1.104 1.104c1.859 1.859 4.875 1.859 6.734 0l21.307-21.307c1.859-1.859 1.859-4.875 0-6.734z"></path>
            </svg>
          </div>
          <span className="ml-2 text-xl font-bold tracking-wide  text-gray-800">
            SmartGadget
          </span>
        </Link>
        <ul className="items-center hidden space-x-8 lg:flex">
          <li>
            <NavLink
              to="/"
              aria-label="Home"
              title="Home"
              className={({ isActive }) => (isActive ? 'active' : 'default')}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/shop"
              aria-label="Shop"
              title="Shop"
              className={({ isActive }) => (isActive ? 'active' : "default")}
            >
              Shop
            </NavLink>
          </li>
          <li>
            <Link to="/cart" aria-label="Cart" title="Cart">
              <div className="relative py-3">
                <ShoppingCartIcon className="h-6 w-6 text-cyan-400" />
                <span className="absolute bottom-5 left-6">{cart.length}</span>
              </div>
            </Link>
          </li>
          <li>
            <NavLink
              to="/about"
              aria-label="About Us"
              title="About Us"
              className={({ isActive }) => (isActive ? 'active' : "default")}
            >
              About Us
            </NavLink>
          </li>
        </ul>
        {/* for small & medium device */}
        <div className="lg:hidden">
          <button
            aria-level="Open Menu"
            title="Open Menu"
            className="p-2 -mr-1"
            onClick={() => setIsMenuOpen(true)}
          >
            <Bars3Icon className="w-5 h-5 text-gray-700"></Bars3Icon>
          </button>

          {isMenuOpen && (
            <div className="absolute top-0 left-0 z-0 w-full">
              <div className="p-5 bg-white border shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <Link className="inline-flex items-center">
                      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-cyan-200">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 32 32"
                          fill="currentColor"
                          className="flex-shrink-0 w-5 h-5 rounded-full text-cyan-600"
                        >
                          <path d="M18.266 26.068l7.839-7.854 4.469 4.479c1.859 1.859 1.859 4.875 0 6.734l-1.104 1.104c-1.859 1.865-4.875 1.865-6.734 0zM30.563 2.531l-1.109-1.104c-1.859-1.859-4.875-1.859-6.734 0l-6.719 6.734-6.734-6.734c-1.859-1.859-4.875-1.859-6.734 0l-1.104 1.104c-1.859 1.859-1.859 4.875 0 6.734l6.734 6.734-6.734 6.734c-1.859 1.859-1.859 4.875 0 6.734l1.104 1.104c1.859 1.859 4.875 1.859 6.734 0l21.307-21.307c1.859-1.859 1.859-4.875 0-6.734z"></path>
                        </svg>
                      </div>
                      <span className="ml-2 text-xl font-bold tracking-wide  text-gray-800">
                        SG
                      </span>
                    </Link>
                  </div>
                  <div>
                    <button
                      aria-level="Close Menu"
                      title="Close Menu"
                      className="p-2 -mr-1"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <XMarkIcon className="w-5 h-5 text-gray-700"></XMarkIcon>
                    </button>
                  </div>
                </div>
                <nav>
                  <ul className="space-y-1">
                    <li>
                      <NavLink
                        to="/shop"
                        aria-label="Shop"
                        title="Shop"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200"
                      >
                        Shop
                      </NavLink>
                    </li>
                    <li>
                      <Link
                        to="/cart"
                        aria-label="Cart"
                        title="Cart"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200"
                      >
                        <div className="relative py-3">
                          <ShoppingCartIcon className="w-6 h-6 text-cyan-600"></ShoppingCartIcon>
                          <span className="absolute bottom-5 left-6">{cart.length}</span>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <NavLink
                        to="/about"
                        aria-label="About Us"
                        title="About Us"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200"
                      >
                        About Us
                      </NavLink>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
