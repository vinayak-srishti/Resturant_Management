import React from 'react'
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min';
import HomePage from './Components/User/HomePage';
import UserRegistration from './Components/User/UserRegistration'
import Footer from './Components/User/Footer';
import Gallery from './Components/User/Gallery';
import StaffMenu from './Components/Staff/StaffMenu';
import Aboutus from './Components/User/AboutUs';
import Userlogin from './Components/User/Userlogin';
function App() {
  return (
    <BrowserRouter>
    <div>



      <Routes>
      <Route path='/gallery' element={<Gallery/>} />
      <Route path='/userregistration' element={<UserRegistration/>} />
      <Route path='/footer' element={<Footer/>} />
      <Route path='/homepage' element={<HomePage/>} />
      <Route path='/staffmenu' element={<StaffMenu/>} />
      <Route path='/aboutus' element={<Aboutus/>}/>
      <Route path='/userlogin' element={<Userlogin/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App
