import React, { useState } from 'react'
import "../Amin/adminlogin.css"

function Adminlogin() {
  const [adlog,setAdlog]=useState({
    username:"",
    password: ""
  })
  const HandleChange=(e)=>{
    setAdlog({...adlog,[e.target.name]: e.target.value})
  }
  const SubmitData=(e)=>{
    e.preventDefault();
    console.log(adlog);
  }
  return (
    <div className="admin_page">
    <div className="admin_login">
      <form onSubmit={SubmitData}>
        <h3>LOGIN</h3>
        <table cellPadding={"4px"} cellSpacing={"4px"}>
          <tr>
            <td>Username:</td>
            <td>
              <input
                type="text"
                name='username'
                className="form-control"
                onChange={HandleChange}
                required
              />
            </td>
          </tr>
          <tr>
            <td>Password:</td>
            <td>
              <input
                type="password"
                name='password'
                className="form-control"
                onChange={HandleChange}
                required
              />
            </td>
          </tr>
        </table>
        <button className="btn btn-danger">Login</button><br/>
       <div className="admin_forgot"><a href="forgot.in">forgotPassword?</a></div> 
      </form>
    </div>
  </div>
  )
}

export default Adminlogin
