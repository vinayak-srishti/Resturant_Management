import React from 'react'
import '../Staff/Stafflogin.css'
import { CiUser } from "react-icons/ci";
import { RiLockPasswordLine } from "react-icons/ri";
function Stafflogin() {
  return (
    <div id='staff-login'>
        <div>
            <form className='login-form'>
            <h1 id='header'>STAFF LOGIN</h1>
            <div class="input-group flex-nowrap" >
  <span class="input-group-text" id="addon-wrapping" style={{backgroundColor:'rgba(15, 14, 14, 0.037)',color:'white'}}><CiUser /></span>
  <input type="text" class="form-control" style={{backgroundColor:'rgba(15, 14, 14, 0.037)',WebkitTextFillColor:'white',lineHeight:'25px'}} placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping"/><br/>
</div>
<div class="input-group flex-nowrap">
  <span class="input-group-text" id="addon-wrapping"  style={{backgroundColor:'rgba(15, 14, 14, 0.037)',color:'white'}} ><RiLockPasswordLine /></span>
  <input type="text" class="form-control"  style={{backgroundColor:'rgba(15, 14, 14, 0.037)',WebkitTextFillColor:'white'}} placeholder="Password" aria-label="Password" aria-describedby="addon-wrapping"/>
</div>

            </form>
        </div>
      
    </div>
  )
}

export default Stafflogin
