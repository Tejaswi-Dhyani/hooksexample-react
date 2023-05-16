import React, { useState } from "react";

// const Formp = () => {
//   const [name,setName]=useState("");
//    const inputText=(event)=>{
// console.log(event.target.value);
// setName(event.target.value);
//     }
//       return (
//         <>
//       <div  className="p-4 border text-center bg-primary">
//         <form>
//           <h2 className="mb-4 text-dark">Hello {name}</h2>
//             <input type="text" placeholder="Enter Your Name" className="w-50 text-center p-2" onChange={inputText} ></input> 
//             <br/> <br/>
//             <button className="btn btn-dark">Click Me 😃</button>
//         </form>
//       </div>
//         </>
        
//       );
//     }

const Formp = () => {
  const [infoname,setinfoName]= useState({
    fname :'',
    lname :'',
    emailname :''
  });
  
  const InputEvent=(event)=>{
    console.log(event.target.value);
    console.log(event.target.name);
const value=event.target.value;
const name=event.target.name;
    setinfoName((preValue)=>{
      // console.log(preValue.value);
      // console.log(preValue.name);
      if(name==='fname'){
return{
fname:value,
lname:preValue.lname,
emailname:preValue.emailname
};
      }
     else if(name==='lname'){
        return{
       
        lname:value,
        fname:preValue.fname,
        emailname:preValue.emailname
        };
              }
              else{
                return{
                  emailname:value,
                fname:preValue.fname,
                lname:preValue.lname
               
                };
                      }
    });
   };
   
        const clicksubmitBtn=(event) => {
          event.preventDefault();
alert("form submitted");
};
   
     return (
        <>
      <div  className="p-4 border text-center bg-primary">
        <form onSubmit={clicksubmitBtn}>
          <h2 className="mb-4 text-dark">Hello {infoname.fname} {infoname.lname} </h2>
          <h3>Your email: {infoname.emailname} </h3>
            <input type="text" placeholder="Enter Your First Name"
             value={infoname.fname} name="fname"
             className="w-50 text-center p-2" 
            onChange={InputEvent} ></input> 
            <br/> <br/>
            <input type="text" placeholder="Enter Your Last Name" 
            value={infoname.lname} name="lname"
             className="w-50 text-center p-2" 
            onChange={InputEvent} ></input> 
             <br/> <br/>
             <input type="text" placeholder="Enter Your Email" 
             value={infoname.emailname} name="emailname"
              className="w-50 text-center p-2" 
            onChange={InputEvent} ></input> 
             <br/> <br/>
            <button className="btn btn-dark" >Click Me 😃</button>
        </form>
      </div>
        </>
        
      );
    }
    export default Formp;