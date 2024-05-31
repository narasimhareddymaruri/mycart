import React from 'react'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import {useState,useEffect} from "react"
import '../src/App.css'
import searchResults from '../utility/search';
import sort_products from '../utility/sort';
import ProductDetails from './ProductDetails';
import ProductList from './ProductList';
import Category from './Category';


function Home() {
  const [product,setProduct]=useState(null);
  const [input,setInput]=useState("");
  const [modifiedArray,setArray]=useState(product);


  useEffect(
    () => {
      (async function fetching() {
        const response = await fetch(`https://fakestoreapi.com/products`);
        const json = await response.json();
        setProduct(json);
       
        setArray(json)


      })();
    }
    , []);



  return (
    <>
    <header>

        <div className="search_area">

          <input type="text" value={input} className="input_bar" onChange={(e) => { setInput(e.target.value) }} placeholder={"Search products here"} />
          <button className="find_button" onClick={() => {  setArray(searchResults(input, product));setInput("") }} >find</button>
          <div className="sort_arrows">
            <p className="sort_word">Sort</p>
            <button className="sort_increase" onClick={() => {setArray(sort_products(modifiedArray, 1))}} >
              <ArrowUpwardIcon />
            </button>
            <button className="sort_decrease" onClick={() => { setArray(sort_products(modifiedArray, -1)) }} >
              <ArrowDownwardIcon />
            </button>

          </div>
          </div>
          <div className='categories'>
            <Category modifiedArray={modifiedArray} setArray={setArray} product={product} />

          </div>
       

    </header>
    <div>
    <ProductList modifiedArray={modifiedArray}/>
    </div>
        </>
    
  )
}

export default Home
