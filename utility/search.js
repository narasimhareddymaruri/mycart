import SelectInput from "@mui/material/Select/SelectInput";

export default function searchResults(input,product,setInput){
  let modifiedArray=product;
  if(input!=""){

  
    modifiedArray = modifiedArray.filter(
      (eachProduct) => {
        let productLowerCase = eachProduct.title.toLowerCase();
        let inputLowerCase = input.toLowerCase();
      
        return productLowerCase.includes(inputLowerCase)
      }
    )

  
  return modifiedArray
}else{
  
  return modifiedArray;
}

}


