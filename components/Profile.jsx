import React from 'react'
import {useState} from "react"

function Profile() {
  // const [details,setDetails]=useState({});

  // function setProfile(){

   
  // }



  return (

    <>
    <h1>This is profile page</h1>
    <img src="../src/assets/we_are_coding.png" alt="feature will come soon"/>



      {/* {
        Object.keys(details).length==0?<>
        <h4>enter the details</h4>
        <div style={{display:"flex", width:"300px",flexDirection:"column" }}>
          <label htmlFor="person_name">Enter Name :</label>
          <input type="text" id='person_name'/>
          <label htmlFor="person_phone">Enter Phone number :</label>
          <input type="number" id='person_phone'/>
          <label htmlFor="">Enter Email :</label>
          <input type="text" id='person_mail'/>
          <button onClick={setProfile}>Submit</button>

        </div>
        
        </>:<h1>This is profile page</h1>


      } */}
      
    </>
  )
}

export default Profile
