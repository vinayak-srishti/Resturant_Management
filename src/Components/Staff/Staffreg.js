import React, { useState } from "react";
import '../Staff/Staffreg.css'
import validator from 'validator'
function Staffreg() {
  const[form,settForm]=useState({
    firstname:"",
    lastname:"",
    contactno:"",
    email:"",
    password:"",
    confirmpassword:"",
    uploadyourphoto:"",
    address:"",
    selectanidproof:"",
    jobposition:""

    
  })


  // const[errormsg,seterrormsg]=useState('')
  // const validate=(value)=>{
  //   if(validator.isStrongPassword(value,{
  //     minLength:8,minLowercase:1,minUppercase:1,minNumbers:1,minSymbols:1
  //   })){
  //     seterrormsg('strong password')
  //   }else{
  //     seterrormsg('not strong password')
  //   }
  //   }
    

     const handleclick=(e)=>{
      settForm({...form,[e.target.name]:[e.target.value]})
     }
     const onSubmitdata=(e)=>{
      console.log(form)
      console.log("submitted")
     }
  return (
    <div id="staff-register">
      <div className="staff-form">
      <center>
        <form onSubmit={onSubmitdata}>

          <h1>STAFF REGISTRATION</h1>
          <div className="staffreg-details">
            <div className="staff-name">
              <div className="row gt-2">
              <div className="col-auto">
                <input type="text" placeholder="First Name" name="firstname" onChange={handleclick}className="form-control"required value={form.firstname}/>
              </div>
              <div className="col-auto">
              <input type="text" placeholder="Last Name" name="lastname" onChange={handleclick}className="form-control"required value={form.lastname}/>
              </div>
              </div>
              </div>
           
             <div className="staffno-email-pass">
              <input type="text" placeholder="Contact No" name="contactno" onChange={handleclick} className="form-control" required value={form.contactno}/><br/>
              <input type="email" placeholder="Email" name="email" onChange={handleclick} className="form-control" required value={form.email} /><br/>
              <input type="password" placeholder="Password" name="password" onChange={handleclick} className="form-control"required value={form.password} /><br/>
              {/* {errormsg===''? null:<span style={{fontWeight:'bold',color:'red'}}>{errormsg}</span>} */}
              <input type="password" placeholder="Confirm Password" name="confirmpassword" className="form-control"required value={form.confirmpassword}/><br/>
              </div>
              <div className="staff-photo">
                <label className="label">Upload your photo</label>
                <input type="file" name="uploadyourphoto"  className="form-control"required  onChange={handleclick} value={form.uploadyourphoto}/><br/>
              </div>
              <div className="staff-address">
              <input type="text"placeholder="Address" name="address"onChange={handleclick} className="form-control" required value={form.address}/><br/>
              </div>
              
              <div className="staff-idproof">
                <label>Upload an ID Proof</label>
                <input type="file" name="selectanidproof" className="form-control" onChange={handleclick} required value={form.selectanidproof}/><br/>
              </div>

             
              <div className="drop-down">
  

  <select name="jobposition" className="form-control" value={form.jobposition} onChange ={handleclick}>
    <option value={'Jpose'}>Choose your Job position</option>
    <option value={'Dish-washer'}>Dish washer</option>
    <option value={'Cashier'}>Cashier</option>
    <option value={'Cooking'}>Cooking</option>
    <option value={'Delivery'}>Delivery</option>


  </select>
  
</div>

        
              
              <div className="staff-button">
              <button style={{height:'55px',width:'155px',position:'absolute',bottom:'-6rem',left:'2rem'}} type="button" class="btn btn-danger">Register</button>
              </div>
              </div>
         </form>
         </center>
         </div>
         </div>
          );
        }
        
        export default Staffreg;
            
            

             

            
  
            
             
             
            
             
            
             
         
      
        
      
  