import React, { useState } from "react";
import '../Staff/Staffreg.css'
import validator from 'validator'
function Staffreg() {
  const[form,settForm]=useState({
    firstname:"",
    lastname:"",
    email:"",
    phonenumber:"",
    uploadyourphoto:"",
    password:"",
    confirmpassword:"",
    selectanidproof:""
  })
  const[errormsg,seterrormsg]=useState('')
 
  const validate=(value)=>{
    if(validator.isStrongPassword(value,{
      minLength:8,minLowercase:1,minUppercase:1,minNumbers:1,minSymbols:1
    })){
      seterrormsg('strong password')
    }else{
      seterrormsg('not strong password')
    }
    }
    // const [confirmpassword,setconfirmpassword]=useState('')
    // const conpassword=(e)=>{
      
    // }
     const handleclick=(e)=>{
      settForm({...form,[e.target.name]:[e.target.value]})
     }
     const onSubmitdata=(e)=>{
      console.log(form)
      console.log("submitted")
     }
  return (
    <div>
      <div className="staff-form">
      <center>
        <form onSubmit={onSubmitdata}>

          <h1>STAFF REGISTRATION</h1>
          <div className="staffreg-details">
            <div className="staff-name">
              <div className="row gt-2">
              <div class="col-auto">
                <input type="text" placeholder="First Name" name="firstname" onChange={{handleclick}}className="form-control"required/>
              </div>
              <div class="col-auto">
              <input type="text" placeholder="Last Name" name="lastname" onChange={{handleclick}}className="form-control"required/>
              </div>
              </div>
              </div>
           
             <div className="staffno-email-pass">
              <input type="text"placeholder="Contact No" name="contactno"onChange={handleclick} className="form-control"required/>
              <input type="email"placeholder="Email" name="email"onChange={handleclick} className="form-control"required/>
              <input type="password"placeholder="Password" name="password"onChange={(e)=>validate(e.target.value)} className="form-control"required/>
              {errormsg===''? null:<span style={{fontWeight:'bold',color:'red'}}>{errormsg}</span>}
              <input type="password"placeholder="Confirm Password" name="confirmpassword"onChange={(e)=>validate(e.target.value)} className="form-control"required/>
              </div>
              <div className="staff-photo">
                <input type="file"placeholder="Upload your photo" className="form-control"required/>
              </div>
              <div className="staff-address">
              <input type="text"placeholder="Address" name="address"onChange={handleclick} className="form-control"required/>
              </div>
              
              <div className="staff-idproof">
                <input type="file"placeholder="Id Proof"className="form-control"required/>
              </div>
              
              <div>
              <button type="button" class="btn btn-danger">Register</button>
              </div>
              </div>
         </form>
         </center>
         </div>
         </div>
          );
        }
        
        export default Staffreg;
            
            

             

            
  
            
             
             
            
             
            
             
         
      
        
      
  