import React, { useState } from "react";

 const Events = () => {
  const green="#33d11b";
    const[Crntdata, Updtdata]=useState("Click Me");
   
    const[crntStyle, Updtstyle]=useState(green);
    
    const textChange = () => {
      Updtdata("Ohhooo");
let purple="#8e44ad";
Updtstyle(purple);
    };
    return (
      <>
    <div  className="p-3 border text-center bg-light">
<div  style={{backgroundColor:crntStyle, display:"inline-block" ,borderRadius:"10px",cursor:"pointer"}} className="border p-2 " onClick={textChange}>{Crntdata}</div>
    </div>
      </>
      
    );
  }
  export default Events;