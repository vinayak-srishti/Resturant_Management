import React, { useState } from 'react'
import '../User/UserRegistration.css'
import validator from 'validator'
import axios from 'axios'

function UserRegistration() {
  const[form,setform]=useState({
    firstname:"",
    lastname:"",
    contactno:"",
    email:"",
    password:"",
    address:"",
    district:"",
    state:"",
    pincode:""
  })

  // const[errormsg,seterrormsg]=useState('')
  // const validate=(value)=>{
  //   if(validator.isStrongPassword(value,{
  //    minLength:8,minLowercase:1,minUppercase:1,minNumbers:1,minSymbols:1
  //   })){
  //     seterrormsg('strong password');
  //   }else{
  //     seterrormsg('not strong password')
  //   }
  // }

   
  const handleclickfunction=(e)=>{
    setform({...form,[e.target.name]:[e.target.value]})
  }
  const onSubmitdata=(e)=>{
    e.preventDefault()
    axios.post("http://localhost:4000/userregister",form)
    .then((result)=>{
       console.log(result);
    })
    .catch((err)=>{
      console.log(err);
    })
    console.log(form)
    console.log("submitted")
  }

  
  
  return (
<div className='userregcustomer-form'>
        <center>
        <form onSubmit={onSubmitdata}>
          
          <h1>REGISTRATION</h1>

        <div className='userregcustomer-details'>  
        <div className='userregcustomer-name'>
        <div className='row gt-2'>
        <div className='col-auto'>
        <input type='text' placeholder='First Name' name='firstname' onChange={handleclickfunction} value={form.firstname} className='form-control' required />
        </div>
        <div className='col-auto'>
        <input type='text' placeholder='Last Name' name='lastname' onChange={handleclickfunction} value={form.lastname} className='form-control' required/>
        </div>
        </div>
        </div>
        

      <div className='userregno-email-pass'>
      <input type='number' placeholder='Contact No' name='contactno' onChange={handleclickfunction} value={form.contactno} className='form-control' required/><br/>
      <input type='email' placeholder='Email' name='email' onChange={handleclickfunction} value={form.email} className='form-control' required/><br/>
      <input type='password' placeholder=' Password' onChange={handleclickfunction} value={form.password} name='password' className='form-control' required/>
      {/* {errormsg === '' ? null :<span style={{  fontWeight: 'bold',color: 'red',}}>{errormsg}</span>} */}
     </div>
    
     <div className='userreg-address'>
     <input type='text' placeholder=' Address' name='address' onChange={handleclickfunction} value={form.address} className='form-control' required/><br/> 
     </div>  

      <div className='userreg-district-state'>  
      <div className='row gt-2'>
      <div className='col-auto'>
      <input type='text' placeholder='City/District' onChange={handleclickfunction} value={form.district} name='district' className='form-control' required/>
      </div>
      <div className='col-auto'>
     <input type='text' placeholder='State' name='state' onChange={handleclickfunction} value={form.state} className='form-control' required /><br/>
     </div>
     </div>
     </div>
     


     <div className='userregpincode'>
      <input type='text' placeholder='Pincode' name='pincode' onChange={handleclickfunction} value={form.pincode} className='form-control' required/>
     </div>
     <button type='submit' className='btn btn-danger' >Register</button><br/>
     </div>
        </form>
        </center>   
    </div>
  )
}


export default UserRegistration
