import React from 'react'
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min';
import HomePage from './Components/User/HomePage';
import UserRegistration from './Components/User/UserRegistration'
import Footer from './Components/User/Footer';
import Gallery from './Components/User/Gallery';
import StaffMenu from './Components/Staff/StaffMenu';
function App() {
  return (
    <BrowserRouter>
    <div>
      <UserRegistration/>
      {/* <Footer/> */}
      {/* <HomePage/> */}
    </div>
    </BrowserRouter>
  )
}

export default App;
