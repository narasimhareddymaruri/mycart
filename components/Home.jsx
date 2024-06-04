import React from 'react'
import { useState, useEffect } from "react"
import '../src/App.css'
import searchResults from '../utility/search';
import sort_products from '../utility/sort';
import ProductDetails from './ProductDetails';
import ProductList from './ProductList';
import Category from './Category';
import pagination from '../utility/pagination';
import showProductsByCategory from '../utility/category';
import Pagination from './Pagination';
import SearchBar from './SearchBar';
import { useContext } from 'react';
import PaginationContext from './contexts/PaginationContext';


function Home() {
  const [product, setProduct] = useState(null);
  const [input, setInput] = useState("");
  let [modifiedArray, setArray] = useState(product);
  let [direction, setDirection] = useState(0);
  let [category, setCategory] = useState("all_categories");
  // let [pagenum, setPagenum] = useState(1);
  // const [pageSize,setPageSize]=useState(4);


  const [pagenum,setPagenum,pageSize,setPageSize]=useContext(PaginationContext);


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


  modifiedArray = (searchResults(input, product, setInput));

  modifiedArray = sort_products(modifiedArray, direction)

  modifiedArray = showProductsByCategory(modifiedArray, category);





  let obj = pagination(modifiedArray, pageSize, pagenum);
  let totalPages = obj.totalPages;
  modifiedArray = obj.dummyArr;

  return (
    <>
    {
      modifiedArray == null ? <h1>..loading</h1> :
      <>
        <header>

          <div className="search_area">
            <SearchBar input={input} setInput={setInput} setDirection={setDirection} />
          </div>

          <div className='categories'>
            <Category modifiedArray={modifiedArray} setCategory={setCategory} product={product} setPagenum={setPagenum} />
          </div>

        </header>

        <main>

          <div>
            <ProductList modifiedArray={modifiedArray} />
          </div>

        </main>

        <Pagination pagenum={pagenum} setPagenum={setPagenum} totalPages={totalPages} />



      </>

    }
    </>

  )
}

export default Home
