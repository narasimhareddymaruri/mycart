import React from 'react'
import Products from './Products'


function ProductList({modifiedArray}) {
  return (
<main >
        {
          modifiedArray==null ? <h4>..Loading</h4> :
            <>
             
              
                {modifiedArray.map(
                  (ele) => (
                    // <div key={ele.id} className='product'>
                    //   <div className="image">
                    //     <img src={ele.image} className="product_image" />
                    //   </div>
                    //   <div className="product_info">
                    //     <p className="product_title">{ele.title}</p>
                    //     <p className="product_price">Price: ${ele.price}</p>
                    //   </div>


                    // </div>
                    <Products
                    key={ele.id}
                    id={ele.id}
                    image={ele.image}
                    title={ele.title}
                    price={ele.price}
                    />

                  )
                )}
              
            </>
        }
    </main>

  )
}

export default ProductList
