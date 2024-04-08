import React from 'react'
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Stafflogin from './Components/Staff/Stafflogin';
import HomePage from './Components/User/HomePage';
import UserRegistration from './Components/User/UserRegistration'
import Footer from './Components/User/Footer';
import ContactUs from './Components/User/ContactUs';
import Gallery from './Components/User/Gallery';
import StaffMenu from './Components/Staff/StaffMenu';
import UserMenu from './Components/User/UserMenu';
import UserLogin from './Components/User/UserLogin';
import Staffaddfood from './Components/Staff/Staffaddfood';
import AdminUserList from './Components/Admin/AdminUserList';
import Payment from './Components/User/Payment';
import Adminlogin from './Components/Admin/Adminlogin';
import Adminlogin from './Components/Admin/Adminlogin';
import Feedback from './Components/User/Feedback';
import Aboutus from './Components/User/AboutUs';
import Navbar from './Components/User/Navbar'
import Adminsidenav from './Components/Admin/Adminsidenav';
import StaffForgotPwd from './Components/Staff/StaffForgotPwd';
import Staffeditfood from './Components/Staff/Staffeditfood';
import Staffreg from './Components/Staff/Staffreg';
import AdminDashboard from './Components/Admin/AdminDashboard';
function App() {
  return ( 
    <BrowserRouter>
    <div>
      
      
      {/* <Navbar/> */}
       <Routes> 
      {/*******************************User************************************/}
      <Route path='/gallery' element={<Gallery/>} />
      <Route path='/userregistration' element={<UserRegistration/>} />
      <Route path='/footer' element={<Footer/>} />
      <Route path='/homepage' element={[<HomePage/>]} />
      <Route path='/contactus' element={<ContactUs/>}/>
      <Route path='/aboutus' element={<Aboutus/>} />
      <Route path='/userlogin' element={<UserLogin/>}/>
      <Route path='/feedback' element={<Feedback/>}/>
      <Route path='/usermenu' element={<UserMenu/>}/>
      <Route path='/navbar' element={<Navbar/>}/>
      <Route path='/payment' element={<Payment/>}/>
      {/********************************staff***********************************/}
      <Route path='/staffmenu' element={<StaffMenu/>} />
      <Route path='/staffregister' element={<Staffreg/>}/>
      <Route path='/stafflogin' element={<Stafflogin/>}/>
      <Route path="/addfood" element={<Staffaddfood/>}/>
      <Route path='/editfood' element={<Staffeditfood/>}/>
      <Route path='/staffforgotpass' element={<StaffForgotPwd/>}/>
      {/********************************Admin***********************************/}
      <Route path='/adminlogin' element={<Adminlogin/>}/>
      <Route path='/adminuserlist' element={<AdminUserList/>}/>
      <Route path='/adminnav' element={<Adminsidenav/>}/>
      <Route path='/admindashboard' element={<AdminDashboard/>}/>
      <Route path='/adminstafflist'  element={<AdminStaffList/>}/>
      
      </Routes> 
    </div>
     </BrowserRouter>
  )
}

export default App;
