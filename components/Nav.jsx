import React from 'react'
import {BrowserRouter, Routes,Route, Link, Navigate} from "react-router-dom";
import Home from './Home';
import Profile from './Profile';
import ProductDetails from './ProductDetails';
import PageNotFound from "./PageNotFound";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import HomeIcon from '@mui/icons-material/Home';
import PaginationContext from './contexts/PaginationContext';
import {useState} from "react"
import Cart from "./Cart"


function Nav() {
  
  let [pagenum, setPagenum] = useState(1);
  const [pageSize,setPageSize]=useState(4);

  const props=[pagenum,setPagenum,pageSize,setPageSize]


  return (
    
    <BrowserRouter>
    <PaginationContext.Provider value={[pagenum,setPagenum,pageSize,setPageSize]}>
    
    
     
   
        <div className="navbar">
        <Link to="/home"><button className='home_icon'  ><HomeIcon style={{ fontSize: "30px" }} /></button></Link>
        <Link to="/cart"><button className='cart_icon' ><ShoppingCartIcon style={{ fontSize: "30px" }} /></button></Link>
        <Link to="/profile"><button className='profile_icon' ><AccountCircleIcon style={{ fontSize: "30px" }} /></button></Link>

        </div>
        
          
       
      <Routes>
      
        <Route path="*" element={<PageNotFound/>}/>
        <Route path="/" element={<Home/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/product/:id" element={<ProductDetails/>} />
        <Route path="/home" element={<Navigate to="/" />}  />
        <Route path="/cart" element={<Cart/>} />
      </Routes>
      </PaginationContext.Provider>
    </BrowserRouter>
  )
}

export default Nav
