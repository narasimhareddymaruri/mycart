import React from 'react'

import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';




function SearchBar({input,setInput,setDirection}) {
  return (
    <>
           <div className='input_area'>
              <input type="text" value={input} className="input_bar" onChange={(e) => { setInput(e.target.value) }} placeholder={"Search products here"} />
              <button className="find_button" onClick={() => { setInput("") }} >X</button>
            </div>
            <div className="sort_arrows">
              <p className="sort_word">Sort</p>
              <button className="sort_increase" onClick={() => { setDirection("increasing") }} >
                <ArrowUpwardIcon />
              </button>
              <button className="sort_decrease" onClick={() => { setDirection("decreasing") }} >
                <ArrowDownwardIcon />
              </button>

            </div>
           





    </>
  )
}

export default SearchBar
