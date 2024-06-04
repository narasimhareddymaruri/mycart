

export default function showProductsByCategory(productArray,category_type){
  

  if(productArray==null || productArray.length==0){
    return productArray;
  }
  if(category_type=="all_categories"){
    return productArray
  }
  
      
  let newArray=productArray.slice();
  
  newArray=newArray.filter(
    (prod)=>(
      prod.category==category_type
    )
  )
  return newArray;
}










