import React, { useState } from "react";
import "../User/UserRegistration.css";
import axios from 'axios';
import {useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';

function UserRegistration() {

  function alert () {
    Swal.fire("Successfully Registered");
  }
  const [form, setform] = useState({
    firstname: "",
    lastname: "",
    contactno: "",
    email: "",
    password: "",
    address: "",
    district: "",
    state: "",
    pincode: ""
  });
 

 
  const navigate=useNavigate()
  const handleclickfunction = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };
 
    
  const onSubmitdata = (e) => {
    e.preventDefault();
    
    axios
      .post("http://localhost:4000/userregister",form)
    
      .then((result) => {
        console.log("test",result);
        console.log(result.status);
        if (result.data.status === 200) {
        

          console.log(result.data);
          console.log("submitted");
          navigate('/homepage')
        }
      })
      .catch((error) => {
        console.log(error);
      });
    console.log(form);
  };
 
 
  return (
    
      
      <div className="userregcustomer-form">
        <center>
          <form onSubmit={onSubmitdata}>
          <h1>REGISTRATION</h1>

        <div className='userregcustomer-details'>  
        <div className='userregcustomer-name'>
        <div className='row gt-2'>
        <div className='col-auto'>
        <input type='text' placeholder='First Name' name='firstname' onChange={handleclickfunction} className='form-control' required />
        </div>
        <div className='col-auto'>
        <input type='text' placeholder='Last Name' name='lastname' onChange={handleclickfunction} className='form-control' required/>
        </div>
        </div>
        </div>
        

      <div className='userregno-email-pass'>
      <input type='text' placeholder='Contact No' name='contactno' onChange={handleclickfunction} className='form-control' required/><br/>
      <input  id="userreg_email" type='email' placeholder='Email' name='email' onChange={handleclickfunction} className='form-control' required/><br/>
      <input id="userreg_pass" type='password' placeholder=' Password' onChange={handleclickfunction} name='password' className='form-control' required/>
    
     </div>
    
     <div className='userreg-address'>
     <input type='text' placeholder=' Address' name='address' onChange={handleclickfunction} className='form-control' required/><br/> 
     </div>  

              <div className="userreg-district-state">
                <div className="row gt-2">
                  <div className="col-auto">
                    <input
                      type="text"
                      placeholder="City/District"
                      onChange={handleclickfunction}
                      name="district"
                      value={form.district}
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="col-auto">
                    <input
                      type="text"
                      placeholder="State"
                      name="state"
                      value={form.state}
                      onChange={handleclickfunction}
                      className="form-control"
                      required
                    />
                    <br />
                  </div>
                </div>
              </div>

              <div className="userregpincode">
                <input
                  type="text"
                  placeholder="Pincode"
                  name="pincode"
                  value={form.pincode}
                  onChange={handleclickfunction}
                  className="form-control"
                  required
                />
              </div>
              <button type="submit" onClick={alert} className="btn btn-danger" >
                Register
              </button>
              <br />
            
            </div>
          </form>
        </center>
      </div>
    
  );
}


export default UserRegistration;
