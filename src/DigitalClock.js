import React, { useState } from "react";


function DigitalClock() {
    const d = new Date();
    let newDate=  d.toLocaleTimeString();
    const [Ctime,setCtime]= useState(newDate);
    const Updatetime=()=>{
        const f= new Date();
        let newUpdateDate=  f.toLocaleTimeString();
        setCtime(newUpdateDate);
    }
   setInterval(Updatetime, 1000);
    return (
      <>
      <div className="text-center  m-3 border p-2 bg-light">
    <h1 >Digital Clock</h1>
    <h2 className="text-primary">{Ctime}</h2>
    </div>
      </>
      
    );
  }



export  default DigitalClock;