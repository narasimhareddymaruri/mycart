import React from 'react'
import { useState, useEffect,useContext } from "react"
import { useParams } from "react-router-dom"
import {Link} from "react-router-dom";
import PaginationContext from './contexts/PaginationContext';


function ProductDetails() {
  const [pagenum,setPagenum,pageSize,setPageSize]=useContext(PaginationContext);

  const { id } = useParams();

  const [prod, setProduct] = useState(null)

  useEffect(
    () => {
      (async function func() {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`);
        const json = await res.json();
        setProduct(json);
        
      })()
    }, []);




  return (
    <>
      {prod == null ? <p>..loading the product details</p> :
        <>
        <header>
          <Link to="/"><button onClick={()=>{setPagenum(pagenum)}} className="back_button">Back</button></Link>
        </header>
          <div className='each_prod'>
            <div className='prouct_image' >
              <img src={prod.image} className="each_product_image" />
            </div>
            <div className="each_prod_details">
            <h1 className="each_product_title" >{prod.title}</h1>
            <p className="each_product_price">Price: ${prod.price}</p>
            <h4 className="each_product_description" >{prod.description}</h4>
            <div className="each_product_rating">
            <p >Rating: {prod.rating.rate} </p>
            <p>users: {prod.rating.count}</p>
            </div>
            </div>

          </div>
        </>
      }


    </>
  )
}

export default ProductDetails
