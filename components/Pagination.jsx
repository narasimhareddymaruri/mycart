import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


function Pagination({pagenum,setPagenum,totalPages}) {
 

 
// --------------------------------




// -------------------------------------
  
  
  return (
    <>
    
    

      <div className='pagination'>
      
      <button disabled={pagenum==1?true:false} onClick={(e)=>{ if(pagenum==1){return};setPagenum((pagenum)=>(pagenum-1));}} >
        <ArrowBackIcon />
      </button>

      <p>{pagenum}</p>

      <button onClick={(e)=>{if(pagenum==totalPages){return};setPagenum((pagenum)=>(pagenum+1));}}  >
        <ArrowForwardIcon />
      </button>


    </div>
    </>
  )
}

export default Pagination
