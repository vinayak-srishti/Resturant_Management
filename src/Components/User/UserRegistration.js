import React from 'react'
import '../User/UserRegistration.css'

function UserRegistration() {
  return (
<div className='userregcustomer-form'>
        <center>
        <form>
          
          <h1>REGISTRATION</h1>

        <div className='userregcustomer-details'>  
        <div className='userregcustomer-name'>
        <div className='row gt-2'>
        <div className='col-auto'>
        <input type='text' placeholder='First Name' className='form-control'  />
        </div>
        <div className='col-auto'>
        <input type='text' placeholder='Last Name' className='form-control'/>
        </div>
        </div>
        </div>
        
        <div className='userregdob'>
        <input type='date' placeholder='date of birth' className='form-control'/>
        </div>


      <div className='userregno-email'>
      <input type='text' placeholder='Contact No' className='form-control'/><br/>
      <input type='text' placeholder='Email' className='form-control' /><br/>
      <input type='text' placeholder=' Address' className='form-control'/><br/>
      </div>
    
     <div className='userregdistrict-state'>
      <div className='row gt-2'>
      <div className='col-auto'>
      <input type='text' placeholder='City/District' className='form-control'/>
      </div>
      <div className='col-auto'>
     <input type='text' placeholder='State' className='form-control' /><br/>
     </div>
     </div>
     </div>


     <div className='userregpincode'>
      <input type='text' placeholder='Pincode' className='form-control'/>
     </div>
     <button type='button' className='btn btn-danger'>Register</button><br/>
     </div>
        </form>
        </center>   
    </div>
  )
}

export default UserRegistration
