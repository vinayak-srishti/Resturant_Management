import React, { useState } from "react";
import "../User/Userlogin.css";
import axios from "axios";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

function UserLogin() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const HandleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  console.log(form);

  const onSubmitData = (e) => {
    e.preventDefault();
    console.log(form);
    axios
      .post("http://localhost:4000/userlogin",form)
      .then((result) => {
        console.log(result);
        if (result.data.status === 200) {
          console.log(result.data.msg);
          localStorage.setItem("user_id", result.data.data._id);
          console.log(result.data.data._id);
           navigate('/homepage')
          console.log("submitted");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="user_page">
      <div className="user_login">
        <form onSubmit={onSubmitData}>
          <h3>USER LOGIN</h3>
          <div className="userlogin_username">
            <div className="row gt-2">
              <div className="col-auto">
                <input
                  type="email"
                  name="email"
                  // maxLength={20}
                  placeholder="enter your mail id"
                  className="form-control"
                  onChange={HandleChange}
                />
              </div>
            </div>
          </div>

          <div className="usrlogin_password">
            <div className="row gt-2">
              <div className="col-auto">
                <input
                  type="Password"
                  name="password"
                
                  placeholder="password"
                  className="form-control"
                  onChange={HandleChange}
                />
              </div>
            </div>
          </div>

          <button className="btn btn-danger " type="submit">
            Login
          </button>
          <br />
          <div className="user_last">
          <div className="user_createnew">
          <Link
              to={`/userregistration`}
             style={{fontSize:"16px", marginLeft:"1rem",textDecoration:"none",color:"white"}}
            
            >
              Create New Account 
            </Link>
          </div>
          <div className="user_forgot">
            <Link
              to={`/forgotpass`}
              style={{ color: "white", marginLeft: "5rem" ,textDecoration:"none"}}
            
            >
              Forgot Password?
            </Link>
          </div>
          </div>
          
        </form>
      </div>
    </div>
  );
}

export default UserLogin;
