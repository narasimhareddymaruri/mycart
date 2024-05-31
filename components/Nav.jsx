import React from 'react'
import {BrowserRouter, Routes,Route, Link, Navigate} from "react-router-dom";
import Home from './Home';
import Profile from './Profile';
import ProductDetails from './ProductDetails';
import ProductList from './ProductList';


function Nav() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/productlist" element={<ProductList/>} />
        <Route path="/product/:id" element={<ProductDetails/>} />
        <Route path="/home" element={<Navigate to="/" />}  />
      </Routes>
    </BrowserRouter>
  )
}

export default Nav
