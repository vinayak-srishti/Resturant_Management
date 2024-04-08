import React from 'react'
import '../Staff/StaffNavbar.css'
import { Link } from 'react-router-dom'
function StaffNavbar() {
  return (
    <div>
      <div className="staff_navbar">
        <nav class="navbar navbar-expand-lg navbar-dark">
          <div className="staff_head">
            <div class="container-fluid">
              <div class="navbar-brand"  style={{fontSize:"50px",marginLeft:"2rem",fontFamily:"pirata one",WebkitTextFillColor:"white"}}>
                El-Demeter
              </div>
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
            </div>
            <div className="staff_navmar_main2">
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ">
                  <li class="nav-item">
                   <Link to={`/homepage`} class="nav-link active" role='button' aria-current="page" >Home</Link>
                  </li>
                  <li class="nav-item">
                  <Link to={`/aboutus`} class="nav-link active" role='button' aria-current="page">About</Link>
                  </li>
                  <li class="nav-item">
                  <Link to={`/staffmenu`} class="nav-link active" role='button' aria-current="page">Menu</Link>
                  </li>
                   
                  <li class="nav-item">
                    <Link to={`/gallery`} class="nav-link" href="#">
                      Gallery
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link to={`/contactus`} class="nav-link" href="#">
                      ContactUs
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default StaffNavbar
