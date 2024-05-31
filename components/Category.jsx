import React from 'react'
import {useState,useEffect} from "react";
import Home from './Home';
import showProductsByCategory from '../utility/category';

function Category({modifiedArray,setArray,product}) {

  
  const [category,setCategory]=useState([]);

  function func(){
    async function fetching(){
      const response=await fetch("https://fakestoreapi.com/products/categories");
      const json=await response.json();
      setCategory(json);
    }
    fetching();
  }
  useEffect(func,[]);


  return (
    <div>
    {
      category.length == 0 ? <p>..loading categories</p> :
        <>
        <button value={"all categories"} onClick={()=>{setArray(product)}}>{"all categories"}</button>
          {
            category.map(
              (each, id) => (<button key={id} value={each} onClick={(event) => {  setArray(showProductsByCategory(product,event.target.value, modifiedArray)) }}>{each}</button>)

            )
          }
        </>
    }
  </div>
  )
}

export default Category
