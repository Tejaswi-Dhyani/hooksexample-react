
import React, { useState } from "react";

const Formreal= () => {
    const[crntValue, setValue]=useState({
      fname:"",
      lname:"",
      emailname:"",
      mobilename:""
    });
    const InputEvent=(event)=>{
      console.log(event.target.value);
      console.log(event.target.name);
// const value=event.target.value;
// const name=event.target.name;
const {name,value}=event.target;
setValue((preValue)=>{
return{
  ...preValue,
  [name]:value,
}
})
}
const SubmitForm=(event)=>{
  // event.preventDefault();
alert("Form Submitted");
}
     
       return (
          <>
        <div  className="p-4 border text-center bg-warning">
          <form onSubmit={SubmitForm}>
            <h2 className="mb-4 text-dark">Hello </h2>
            <h3>{crntValue.fname} {crntValue.lname}</h3>
            <p>Your email is  {crntValue.emailname} and mobile number: {crntValue.mobilename}</p>
              <input type="text" placeholder="Enter Your First Name"
               name="fname" value={crntValue.fname}
               className="w-50 text-center p-2" 
              onChange={InputEvent} ></input> 
              <br/> <br/>
              <input type="text" placeholder="Enter Your Last Name" 
              name="lname" value={crntValue.lname}
               className="w-50 text-center p-2" 
              onChange={InputEvent} ></input> 
               <br/> <br/>
               <input type="text" placeholder="Enter Your Email" 
               name="emailname" value={crntValue.emailname}
                className="w-50 text-center p-2" 
              onChange={InputEvent} ></input> 
               <br/> <br/>
               <input type="number" placeholder="Enter Your Mobile no." 
               name="mobilename" value={crntValue.mobilename}
                className="w-50 text-center p-2" 
              onChange={InputEvent} ></input> 
               <br/> <br/>
              <button className="btn btn-dark" >Click Me 😃</button>
          </form>
        </div>
          </>
          
        );
      }

export default Formreal;