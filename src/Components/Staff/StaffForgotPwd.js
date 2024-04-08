import React from 'react'
import '../Staff/StaffForgotPwd.css'
function StaffForgotPwd() {
  return (
    <div className='Staff_fpwd'>
     <center>   
      <form style={{marginTop:'10%',marginLeft:"1rem"}}>
        <h5>Reset Password</h5><br/>
        <input type='email'className='form-control' placeholder='Email'style={{border:"1px solid grey",WebkitTextFillColor:"black"}}/><br />
        <input type='password'className='form-control' placeholder='Reset Password' style={{border:"1px solid grey",WebkitTextFillColor:"black"}}/><br />
        <input type='password'className='form-control' placeholder='Confirm Password'style={{border:"1px solid grey",WebkitTextFillColor:"black"}}/><br />
        <button type='submit' className="btn btn-primary">Submit</button>
        
        
      </form>
      </center>
    </div>
  )
}

export default StaffForgotPwd
