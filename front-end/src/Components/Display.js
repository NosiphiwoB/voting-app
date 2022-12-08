import React from "react";
import Navbar from "./Navbar";

const Display = (props) =>{
    const {card, deleteParty} = props
    return(
        <div>
            <Navbar/>

        <div id="cards" >{card.map((item) => {
            return(
                <card key={item._id} className="card">
                    <p >{item.partyname}</p>
                    <p>{item.startdate}</p>
                    <p>{item.leader}</p>
                    <p>{item.members}</p>
                    <button type="submit" value="delete" className="delete" onClick={()=>deleteParty(item._id)}>X</button>
                </card>
            )
        })}</div>    
        </div>
    )

}

export default Display