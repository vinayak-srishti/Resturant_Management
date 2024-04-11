import React, { useState } from "react";
import "../User/ContactUs.css";
import { FiPhoneCall } from "react-icons/fi";
import { SlLocationPin } from "react-icons/sl";
import { TfiEmail } from "react-icons/tfi";
import axios from 'axios'
function ContactUs() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    number: "",
    subject: "",
    message: ""
  });

  const handleclick = (e) => {
    setForm({ ...form, [e.target.name]: [e.target.value] });
  };
  const onsubmitdata = (e) => {
    e.preventDefault()
    axios.post("http://localhost:4000/userregister", form)
    .then((result) => {
      console.log(result);
      if (result.data.staus === 200) {
        alert("submitted");
        console.log(result.data);
        console.log("submitted");
      }
    })
    .catch((error) => {
      console.log(error);
    });
  console.log(form);
};
  

  return (
    <div>
      <div className="ContactUs">
        <h1>CONTACT US</h1>
        <h5 id="ContactUs_h5">How to find Us</h5>
      </div>
      <div className="ContactUs_info">
        <h3
          style={{ fontFamily: "Pirata One", color: "aliceblue" }}
          className="ContactUs_head"
        >
          Contact Info
        </h3>
        <h3 style={{ fontFamily: "Pirata One" }} className="ContactUs_Phone">
          <FiPhoneCall style={{ marginRight: "25px" }} />
          Phone
        </h3>
        <p
          style={{
            color: "whitesmoke",
            marginLeft: "70px",
            fontFamily: "Bona Nova",
            fontSize: "17px",
          }}
        >
          +91 9876543210
        </p>
        <h3 style={{ fontFamily: "Pirata One" }} className="ContactUs_Address">
          <SlLocationPin style={{ marginRight: "25px" }} />
          Address
        </h3>
        <p
          style={{
            color: "whitesmoke",
            marginLeft: "70px",
            fontFamily: "Bona Nova",
            fontSize: "17px",
          }}
        >
          Jazz Arcade,NH 66,Vyttila,
        </p>
        <p
          style={{
            color: "whitesmoke",
            marginLeft: "70px",
            fontFamily: "Bona Nova",
            fontSize: "17px",
          }}
        >
          Kochi,Kerala 682019
        </p>
        <h3 style={{ fontFamily: "Pirata One" }} className="ContactUs_Email">
          <TfiEmail style={{ marginRight: "25px" }} />
          Email
        </h3>
        <p
          style={{
            color: "whitesmoke",
            marginLeft: "70px",
            fontFamily: "Bona Nova",
            fontSize: "17px",
          }}
        >
          eldemeter@gmail.com
        </p>
        <div className="ContactUs_hours">
        <form className="ContactUs_Timings">
          <h5 id="ContactUs_reservations">Call For Reservations</h5>
          <h1 id="ContactUs_Openinghours">Opening Hours</h1>
          <p
            style={{
              color: "brown",
              position: "absolute",
              top: "14rem",
              marginLeft: "50px",
            }}
          >
            ----------------------------------
          </p>
          <h5  style={{ fontFamily: "Pirata One" }} id="ContactUs_openingdays">
            Monday-Friday Saturday-Sunday
          </h5>
          <p style={{ fontFamily: "Pirata One" }} id="ContactUs_openingtime">
            10AM-12PM CLOSED
          </p>
          <button
            style={{ fontFamily: "Pirata One" }}
            id="ContactUs_button1"
            type="button"
            class="btn btn-danger"
          >
            +91 9876543210
          </button>
        </form>
        </div>
        <form onSubmit={onsubmitdata} >
          <div className="ContactUs_form">
            <h3
              style={{
                color: "aliceblue",
                fontFamily: "Pirata One",
                fontSize: "40px",
                fontWeight: "bold",
              }}
            >
              Contact form
            </h3>
            <div className="ContactUs_name_email" style={{ padding: "1rem" }}>
              <div className="row gt-2">
                <div className="col-auto">
                  <input
                    type="text"
                    placeholder="Your Name "
                    name="yourname"
                    onChange={handleclick}
                    className="form-control"
                    value={form.name}
                    required
                  />
                </div>
                <div className="col-auto">
                  <input
                    type="text"
                    placeholder="Your Email "
                    name="youremail"
                    onChange={handleclick}
                    className="form-control"
                    value={form.email}
                    required
                  />
                </div>
              </div>
            </div>
            <div className="Contact_Us_number_subject" style={{ padding: "1rem" }}>
              <div className="row gt-2">
                <div className="col-auto">
                  <input
                    type="text"
                    placeholder="Your Number "
                    name="yournumber"
                    onChange={handleclick}
                    className="form-control"
                    value={form.number}
                    required
                  />
                  <br />
                </div>
                <div className="col-auto">
                  <input
                    type="text"
                    placeholder="Subject"
                    name="subject"
                    onChange={handleclick}
                    className="form-control"
                    value={form.subject}
                    required
                  />
                  <br />
                </div>
              </div>
            </div>
            <div
              className="Contact_Us_message"
              style={{ width: "30rem", marginRight: "58rem" }}
            >
              
                <input
                  type="textarea"
                  style={{ height:"10rem" ,marginLeft:"1rem",width:"28.5rem"}}
                  placeholder="Message"
                  name="message"
                  onChange={handleclick}
                  className="form-control"
                  value={form.message}
                  required
                />
                <br />
              
              <button
                style={{
                  height: "50px",
                  width: "9rem",
                  position: "absolute",
                  top: "24rem",
                  left: "11rem",
                  color: "aliceblue",
                  color: "#991b1f",
                  WebkitTextFillColor:"aliceblue"
                }}
                type="submit"
                class="btn btn-danger"
              >
                Send message
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
