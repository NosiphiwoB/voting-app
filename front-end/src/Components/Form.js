import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";

const Form = (props) => {
  const {handleChange, handleSubmit, partyname, startdate, leader, members} = props;
    return(
        <div>
            <Navbar/>

       <div>
        <h1>Add Party</h1>        
       </div>

       <form id="form">
         <div>
           <label>Party Name</label>
           <input></input>
         </div>

         <div>
          <label>Start Date</label>
          <input type="date"></input>
         </div>

        <div>
          <label>Leader</label>
          <input></input>
        </div>

        <div>
         <label>Members</label>
         <input type="number"></input>
        </div>

        <div>
         <button>Submit</button>
        </div>



       </form>


        </div>
        
        
    )
}

export default Form