

export default function showProductsByCategory(prod,category_type,mod){
      
  let newArray=prod.slice();
  
  newArray=newArray.filter(
    (prod)=>(
      prod.category==category_type
    )
  )
  return newArray;
}










