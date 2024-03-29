import React from 'react'
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Stafflogin from './Components/Staff/Stafflogin';
import HomePage from './Components/User/HomePage';
import UserRegistration from './Components/User/UserRegistration'
import Footer from './Components/User/Footer';
import Staffreg from './Components/Staff/Staffreg';
import ContactUs from './Components/User/ContactUs';
import Gallery from './Components/User/Gallery';
import StaffMenu from './Components/Staff/StaffMenu';
import UserMenu from './Components/User/UserMenu';
import UserLogin from './Components/User/UserLogin';
import Staffaddfood from './Components/Staff/Staffaddfood';
import AdminUserList from './Components/Admin/AdminUserList';
function App() {
  return (
    <BrowserRouter>
    <div>
      <AdminUserList/>
      
      {/* <Navbar/> */}
       <Routes> 
      {/*******************************User************************************/}
      <Route path='/gallery' element={<Gallery/>} />
      <Route path='/userregistration' element={<UserRegistration/>} />
      <Route path='/footer' element={<Footer/>} />
      <Route path='/homepage' element={<HomePage/>} />
      <Route path='/contactus' element={<ContactUs/>}/>
      <Route path='/userlogin' element={<UserLogin/>}/>
      {/********************************staff***********************************/}
      <Route path='/staffmenu' element={<StaffMenu/>} />
      <Route path='/staffreg' element={<Staffreg/>}/>
      <Route path='/stafflogin' element={<Stafflogin/>}/>
      <Route path="/addfood" element={<Staffaddfood/>}/>
      {/********************************Admin***********************************/}
      {/* <Route path='/adminlogin' element={<Adminlogin/>}/> */}
      
      </Routes> 
    </div>
     </BrowserRouter>
  )
}

export default App;
