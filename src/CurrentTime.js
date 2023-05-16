import React, { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";



function CurrentTime() {
    let newTime = new Date().toLocaleTimeString();
    const [Ctime,setCtime]= useState(newTime);
    const getCtime=()=>{
        let newTime = new Date().toLocaleTimeString();
        setCtime(newTime);
    }
    return (
      <>
      <div className="text-center p-2">
    <h1>{Ctime}</h1>
     <button className='btn btn-primary btn-lg' onClick={getCtime}>GET TIME</button>
    </div>
      </>
      
    );
  }
  
  export default CurrentTime;