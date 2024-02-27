import React, { useState } from "react";
import "../User/userlogin.css"

function Userlogin() {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });
  const HandleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const onSubmitData = (e) => {
    e.preventDefault();
    console.log(form);
    alert("Submitted");
  };
  return (
    <div className="user_page">
      <div className="user_login">
        <form onSubmit={onSubmitData}>
          <h3>LOGIN</h3>
          <div className="usrlogin_username">
            <div className="row gt-2">
              <div className="col-auto">Username</div>
              <div className="col-auto">
                <input
                  type="text"
                  name="username"
                  className="form-control"
                  onChange={HandleChange}
                />
              </div>
            </div>
          </div>

          <div className="usrlogin_password">
            <div className="row gt-2">
              <div className="col-auto">Password</div>
              <div className="col-auto">
                <input
                  type="Password"
                  name="password"
                  className="form-control"
                  onChange={HandleChange}
                />
              </div>
            </div>
          </div>

          <button className="btn btn-danger">Login</button>
          <br />
          <div className="user_forgot">
            <a href="forgot.in">forgotPassword?</a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Userlogin;
