import React from 'react'
import {Link} from "react-router-dom"

function Products({id,image,title,price}) {
  return (
  
  
               <div key={id} className='product'>
                <Link to={`/product/${id}`}>
                
                      <div className="image">
                        <img src={image} className="product_image" />
                      </div>
                      
                      </Link>
                      <div className="product_info">
                        <p className="product_title">{title}</p>
                        <p className="product_price">Price: ${price}</p>
                      </div>


                    </div>
                    
  )
}

export default Products
