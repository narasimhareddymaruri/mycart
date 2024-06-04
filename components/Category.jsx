import React from 'react'
import {useState,useEffect} from "react";



function Category({modifiedArray,setCategory,product,setPagenum}) {
  const [categoryArray,setCategoryArray]=useState([])
  


  function func(){
    async function fetching(){
      const response=await fetch("https://fakestoreapi.com/products/categories");
      const json=await response.json();
      setCategoryArray(json);
    }
    fetching();
  }
  useEffect(func,[]);

  function handleClick(event){
    for(let i of document.querySelectorAll("button.btn")){
      (i.classList.remove("btn"))
    }
    event.currentTarget.classList.add("btn");

  }


  return (
    <div>
    {
      product==null ? <p>..loading categories</p> :
        <>
        <button  value={"all_categories"} onClick={(e)=>{handleClick(e); setCategory("all_categories");setPagenum(1) }}>{"all categories"}</button>
          {
            categoryArray.map(
              (each, id) => (<button key={id} value={each}   onClick={(event) => { 
                
                handleClick(event);setCategory(event.target.value); setPagenum(1)  }}>{each}</button>)

            )

          }
        </>
    }
  </div>
  )
}

export default Category
