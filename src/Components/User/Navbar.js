import React from 'react'
import "../User/Navbar.css"
import { IoCartOutline } from "react-icons/io5";
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <div>
       <div className="navbar_main">
        <nav class="navbar navbar-expand-lg navbar-dark">
          <div className="head">
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
            <div className="navmar_main2">
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ">
                  <li class="nav-item">
                   <Link to={`/homepage`} class="nav-link active" role='button' aria-current="page" >Home</Link>
                  </li>
                  <li class="nav-item">
                  <Link to={`/aboutus`} class="nav-link active" role='button' aria-current="page">About</Link>
                  </li>
                  <li class="nav-item dropdown">
                    <Link to={``}
                      class="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Menu
                    </Link>
                    <ul class="dropdown-menu">
                      <li>
                        <Link to={`/userstarter`} class="dropdown-item" >
                          Starters
                        </Link>
                      </li>
                      <li>
                        <Link to={`/usermaincourse`} class="dropdown-item" >
                          Main Course
                        </Link>
                      </li>
                      <li>
                        <Link to={`/userbeverages`} class="dropdown-item" >
                          Beverages
                        </Link>
                      </li>
                    </ul>
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
                  <li class="nav-item">
                  
                  </li>
                  <li class="nav-item">
                    <Link to={`/usercart`} class="nav-link"><IoCartOutline  style={{color:"white",marginLeft:"-3rem",height:"2.5rem"}}/></Link>
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

export default Navbar

