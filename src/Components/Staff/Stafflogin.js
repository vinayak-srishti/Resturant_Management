import React, { useState } from "react";
import "../Staff/Stafflogin.css";
import axios from "axios";
import { Link,useNavigate } from "react-router-dom";
function Stafflogin() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  
  const Navigate=useNavigate()
  const handleclick=(e)=>{
    setForm({...form,[e.target.name]:e.target.value})
  }
  const onSubmitdata = (e) => {
    e.preventDefault();
    console.log(form);
    axios.post('http://localhost:4000/stafflogin',form)
    .then((result)=>{
      console.log(result);
      if(result.data.status===200){
        alert("Successfully Login")
        Navigate('/staffnavbar')
        console.log(result.data.msg);
        console.log("Submitted");
      }
    })
    .catch((error)=>{
console.log(error);
    })

    console.log(form);
    alert("Login Successfully");
  };

  console.log(form);

  return (
    <div id="staff-login">
      <div className="staff_login_form">
        <form onSubmit={onSubmitdata} className="login-form">
          <h1 id="header">STAFF LOGIN</h1>

          <div className="staff_login_email">
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="form-control"
              onChange={handleclick}
            />
          </div>
          <div className="staff_login_password">
            <input
              type="Password"
              name="password"
              placeholder="Password"
              className="form-control"
              onChange={handleclick}
            />
          </div>

          <button
            style={{
              width: "8rem",
              height: "2.5rem",
              fontSize: "20px",
              marginLeft: "8rem",
            }}
            className="btn btn-danger"
            type="submit"
          >
            Login
          </button>
          <br />
 
          <div className="forgot__password">
            <Link
              to={`/forgotpass`}
              style={{ color: "white", marginLeft: "15rem" }}
              href="forgot.in"
            >
              Forgot Password?
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Stafflogin;
