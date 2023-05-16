import React, { useState } from "react";

 const UseState = () => {
  const[crnt,updtData]=useState({
brand:"Ford",
color:"Red",
model:"Mustang",
year:"2021"
  });
const updateInfo=()=>{
    
//     updtData(nowstate=>{
// return{...nowstate,year:"2008"}
//     });
updtData(nowstate=>{
    return{brand:"Maruti",color:"Gray",model:"800",year:"2008"}
        });
}
    return (
      <>
    <div  className="p-2 border text-center bg-light m-3">
        <h2>My {crnt.brand} car</h2>
        <h4>It is a {crnt.color} {crnt.model} from {crnt.year} </h4>
        <button type="button" onClick={updateInfo}> Click to Update</button>
    </div>
      </>
      
    );
  }
  export default UseState;