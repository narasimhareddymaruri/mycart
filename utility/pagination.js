


export default function pagination(productArr,pageSize,pagenum){
  if(productArr==null || productArr.length==0){
    return {dummyArr:productArr,totalPages:0}
  }
  let dummyArr=productArr.slice();
  let totalPages=Math.ceil(dummyArr.length/pageSize);
  let sidx=(pagenum-1)*pageSize;
  let eidx=(pagenum*pageSize);
  dummyArr=dummyArr.slice(sidx,eidx);

  return {dummyArr, totalPages}

}



