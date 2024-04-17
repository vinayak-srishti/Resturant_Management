import React, { useState } from "react";
import axios from "axios";
import "../Staff/Staffreg.css";
import {useNavigate} from 'react-router-dom'
function Staffreg() {
  const [form1, settForm] = useState({
    firstname: "",
    lastname: "",
    age: "",
    dob: "",
    contactno: "",
    email: "",
    password: "",
    confirmpassword: "",
    uploadyourphoto: "",
    address: "",
    selectanidproof: "",
    jobposition: "",
  });

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
     const Navigate=useNavigate()
     const handleclick=(e)=>{
      settForm({...form1,[e.target.name]:[e.target.value]})
     }
     const handleFileChange = (e) => {
      const { name, files } = e.target;
      settForm({ ...form1, [name]: files[0] });
    };
     const onSubmitdata=(e)=>{
      e.preventDefault()
      const formData = new FormData();
      formData.append("firstname", form1.firstname);
      formData.append("lastname", form1.lastname);
      formData.append("age", form1.age);
      formData.append("dob", form1.dob);
      formData.append("contactno", form1.contactno);
      formData.append("email", form1.email);
      formData.append("password", form1.password);
      formData.append("confirmpassword", form1.confirmpassword);
      formData.append("files", form1.uploadyourphoto);
      formData.append("address", form1.address);
      formData.append("files", form1.selectanidproof);
      formData.append("jobposition", form1.jobposition);

      console.log('Staffreg form ', formData)
      axios.post("http://localhost:4000/staffregister",formData, {

        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((result) => {
        console.log(result);
        if (result.data.status === 200) {
          alert("successfully registered");
          console.log(result.data);
           Navigate('/stafflogin')
        }
       
      })
     
      .catch((error) => {
        console.log(error);
      });
    console.log(form1);
  };
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
                    <input
                      type="text"
                      placeholder="First Name"
                      name="firstname"
                      onChange={handleclick}
                      className="form-control"
                      required
                      value={form1.firstname}
                    />
                  </div>
                  <div className="col-auto">
                    <input
                      type="text"
                      placeholder="Last Name"
                      name="lastname"
                      onChange={handleclick}
                      className="form-control"
                      required
                      value={form1.lastname}
                    />
                  </div>
                </div>
              </div>
              <div className="staff-age-dob">
                <div className="row gt-2">
                  <div className="col-auto">
                    <input
                      type="text"
                      placeholder="Age"
                      name="age"
                      onChange={handleclick}
                      className="form-control"
                      required
                      value={form1.age}
                    />
                  </div>
                  <div className="col-auto">
                    <input
                      type="date"
                      placeholder="DOB"
                      name="dob"
                      onChange={handleclick}
                      className="form-control"
                      required
                      value={form1.dob}
                    />
                  </div>
                </div>
              </div>

              <div className="staffno-email-pass">
                <input
                  type="text"
                  placeholder="Contact No"
                  name="contactno"
                  onChange={handleclick}
                  className="form-control"
                  required
                  value={form1.contactno}
                />
                <br />
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  onChange={handleclick}
                  className="form-control"
                  required
                  value={form1.email}
                />
                <br />
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  onChange={handleclick}
                  className="form-control"
                  required
                  value={form1.password}
                />
                <br />
                {/* {errormsg===''? null:<span style={{fontWeight:'bold',color:'red'}}>{errormsg}</span>} */}
                <input
                  type="password"
                  placeholder="Confirm Password"
                  name="confirmpassword"
                  onChange={handleclick}
                  className="form-control"
                  required
                  value={form1.confirmpassword}
                />
                <br />
              </div>
              <div className="staff-photo">
                <label className="label">Upload your photo</label>
                <input
                  type="file"
                  name="uploadyourphoto"
                  className="form-control"
                  required
                  onChange={handleFileChange}
                />
                <br />
              </div>
              <div className="staff-address">
                <input
                  type="text"
                  placeholder="Address"
                  name="address"
                  onChange={handleclick}
                  className="form-control"
                  required
                  value={form1.address}
                />
                <br />
              </div>

              <div className="staff-idproof">
                <label>Upload an ID Proof</label>
                <input
                  type="file"
                  name="selectanidproof"
                  className="form-control"
                  onChange={handleFileChange}
                  required
                />
                <br />
              </div>

              <div className="drop-down" id="staff_drop">
                <select style={{backgroundColor:"rgba(240,248,255,0.416)"}}
                  name="jobposition"
                  className="form-control"
                  value={form1.jobposition}
                  onChange={handleclick}
                >
                  <option value={"Jpose"}>Choose your Job position</option>
                  <option value={"Dish-washer"}>Dish washer</option>
                  <option value={"Cashier"}>Cashier</option>
                  <option value={"Cooking"}>Cooking</option>
                  <option value={"Delivery"}>Delivery</option>
                </select>
              </div>

              <div className="staff-button">
                <button
                  style={{
                    height: "55px",
                    width: "155px",
                    // position: "absolute",
                    bottom: "-6rem",
                    left: "2rem",
                  }}
                  type="submit"
                  class="btn btn-danger"
                >
                  Register
                </button>
              </div>
            </div>
          </form>
        </center>
      </div>
    </div>
  );
}

export default Staffreg;
