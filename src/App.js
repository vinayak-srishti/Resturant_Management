import React from 'react'
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min';
import HomePage from './Components/User/HomePage';
import UserRegistration from './Components/User/UserRegistration'
import Footer from './Components/User/Footer';
import Gallery from './Components/User/Gallery';

function App() {
  return (
    <BrowserRouter>
    <div>
      <Routes>
      <Route path='/gallery' element={<Gallery/>} />
      <Route path='/userregistration' element={<UserRegistration/>} />
      <Route path='/footer' element={<Footer/>} />
      <Route path='/homepage' element={<HomePage/>} />
      
      </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App
