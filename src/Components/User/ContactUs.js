import React, { useState } from "react";
import "../User/ContactUs.css";
import { FiPhoneCall } from "react-icons/fi";
import { SlLocationPin } from "react-icons/sl";
import { TfiEmail } from "react-icons/tfi";
function ContacttUs() {
  const [form, setForm] = useState({
    yourname: "",
    youremail: "",
    yournumber: "",
    subject: "",
    message: ""
  });

  const handleclick = (e) => {
    setForm({ ...form, [e.target.name]: [e.target.value] });
  };
  const onsubmitdata = () => {
    console.log(form);
    console.log("submitted");
  };

  return (
    <div>
      <div id="contact-us">
        <h1>CONTACT US</h1>
        <h5>How to find Us</h5>
      </div>
      <div className="contact-info">
        <h3
          style={{ fontFamily: "Pirata One", color: "aliceblue" }}
          className="c-i"
        >
          Contact Info
        </h3>
        <h3 style={{ fontFamily: "Pirata One" }} className="phone">
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
        <h3 style={{ fontFamily: "Pirata One" }} className="location">
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
        <h3 style={{ fontFamily: "Pirata One" }} className="email">
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
        <form className="opening-hours">
          <h5 id="reservations">Call For Reservations</h5>
          <h1 id="opening-hours">Opening Hours</h1>
          <p
            style={{
              color: "brown",
              position: "absolute",
              top: "14rem",
              marginLeft: "50px",
            }}
          >
            --------------------------------------------------------------
          </p>
          <h5 style={{ fontFamily: "Pirata One" }} id="opening-days">
            Monday-Friday Saturday-Sunday
          </h5>
          <p style={{ fontFamily: "Pirata One" }} id="opening-time">
            10AM-12PM CLOSED
          </p>
          <button
            style={{ fontFamily: "Pirata One" }}
            id="button1"
            type="button"
            class="btn btn-danger"
          >
            +91 9876543210
          </button>
        </form>
        <form onSubmit={onsubmitdata}>
          <div className="contact-form">
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
            <div className="name-email" style={{ padding: "1rem" }}>
              <div className="row gt-2">
                <div className="col-auto">
                  <input
                    type="text"
                    placeholder="Your Name "
                    name="yourname"
                    onChange={handleclick}
                    className="form-control"
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
                    required
                  />
                </div>
              </div>
            </div>
            <div className="number-subject" style={{ padding: "1rem" }}>
              <div className="row gt-2">
                <div className="col-auto">
                  <input
                    type="text"
                    placeholder="Your Number "
                    name="yournumber"
                    onChange={handleclick}
                    className="form-control"
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
                    required
                  />
                  <br />
                </div>
              </div>
            </div>
            <div
              className="message"
              style={{ width: "30rem", marginRight: "58rem" }}
            >
              <div className="col-auto">
                <input
                  type="textarea"
                  style={{ height: "10rem" }}
                  placeholder="Message"
                  name="message"
                  onChange={handleclick}
                  className="form-control"
                  required
                />
                <br />
              </div>
              <button
                style={{
                  height: "50px",
                  width: "145px",
                  position: "absolute",
                  bottom: "-5rem",
                  left: "0.8rem",
                  color: "aliceblue",
                  backgroundColor: "brown",
                }}
                type="button"
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

export default ContacttUs;
