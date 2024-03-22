import React from 'react'
import "../User/Navbar.css"
function Navbar() {
  return (
    <div>
       <div className="navbar_main">
        
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
          <div className="head">
            <div class="container-fluid">
              <a class="navbar-brand" href="#" style={{fontSize:"24px",marginLeft:"2rem"}}>
                El-Demeter
              </a>
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
                    <a class="nav-link active" aria-current="page" href="#" >
                      Home
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      About
                    </a>
                  </li>
                  <li class="nav-item dropdown">
                    <a
                      class="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Menu
                    </a>
                    <ul class="dropdown-menu">
                      <li>
                        <a class="dropdown-item" href="#">
                          Vegetarian
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Non-Veg
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Desserts
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      Gallery
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      ContactUs
                    </a>
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

