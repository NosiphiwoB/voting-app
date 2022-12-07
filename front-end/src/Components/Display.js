import React from "react";
import Navbar from "./Navbar";

const Display = (props) =>{
    const {card} = props
    return(
        <div>
            <Navbar/>

        <div id="cards" >{card.map((item, index) => {
            return(
                <card key={index} className="card">
                    <p >{item.partyname}</p>
                    <p>{item.startdate}</p>
                    <p>{item.leader}</p>
                    <p>{item.members}</p>
                </card>
            )
        })}</div>    
        </div>
    )

}

export default Display