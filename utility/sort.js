


export default function sort_products(array,val){
  let newArray=array.slice();
  
  if (val == 1) {
    newArray = newArray.sort((item1, item2) => (item1.price - item2.price));
    return newArray
  }
  else {
     newArray = newArray.sort((item1, item2) => (item2.price - item1.price));
    return newArray
  };

}


// export default function sort_products(array,val){

//   let newArr=array.slice().sort((a,b)=>{
//     if(val==-1){
//       return a.price<b.price?-1:1
//     }
//     if(val==1){
//       return a.price>b.price?-1:1
//     }
//   });
//   console.log(newArr);
//   return newArr
// }
