import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from './components/Home.jsx';
import Shop from './components/Shop.jsx';
import Cart from './components/Cart.jsx';
import About from './components/About.jsx';
import { cartAndProductData } from './components/loader/GetCart&ProductsData.js';
import { Toaster } from 'react-hot-toast';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    loader: cartAndProductData,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/shop',
        element:<Shop></Shop>,
        loader: ()=>fetch('products.json')
      },
      {
        path:'/cart',
        element:<Cart></Cart>
      },
      {
        path:'/about',
        element:<About></About>
      },
    ]
  }
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Toaster/>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
