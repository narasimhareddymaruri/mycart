


export default function sort_products(modarray,direction){
  if(modarray==null|| modarray.length==0){
    return modarray
  }
  let newArray=modarray.slice();
  if(direction!="default"){
    if (direction == "increasing") {
      newArray = newArray.sort((item1, item2) => (item1.price - item2.price));
      return newArray
    }
    else {
       newArray = newArray.sort((item1, item2) => (item2.price - item1.price));
      return newArray
    };

  }
  return modarray

}


