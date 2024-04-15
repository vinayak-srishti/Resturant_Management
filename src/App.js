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

import Userlogin from './Components/User/Userlogin';
import Staffaddfood from './Components/Staff/Staffaddfood';
import AdminUserList from './Components/Admin/AdminUserList';
import Payment from './Components/User/Payment';
import Adminlogin from './Components/Admin/Adminlogin';
import Feedback from './Components/User/Feedback';
import Aboutus from './Components/User/AboutUs';
import Navbar from './Components/User/Navbar'
import Adminsidenav from './Components/Admin/Adminsidenav';
import StaffForgotPwd from './Components/Staff/StaffForgotPwd';
import Staffeditfood from './Components/Staff/Staffeditfood';
import UserStarter from './Components/User/UserStarter';
import UserBeverages from './Components/User/UserBeverages';
import UserMaincourse from './Components/User/UserMaincourse';
import StaffNavbar from './Components/Staff/StaffNavbar';
import Staffreg from './Components/Staff/Staffreg';
import AdminDashboard from './Components/Admin/AdminDashboard';
import AdminStafflist from './Components/Admin/AdminStafflist';
import UserCart from './Components/User/UserCart';
function App() {
  return ( 
    <BrowserRouter>
    <div>
       <Routes> 
      {/*******************************User************************************/}
      <Route path='/gallery' element={[<Navbar/>,<Gallery/>,<Footer/>]} />
      <Route path='/userregistration' element={<UserRegistration/>} />
      <Route path='/footer' element={<Footer/>} />
      <Route path='/homepage' element={[<Navbar/>,<HomePage/>,<Footer/>]} />
      <Route path='/contactus' element={[<Navbar/>,<ContactUs/>,<Footer/>]}/>
      <Route path='/aboutus' element={[<Navbar/>,<Aboutus/>,<Footer/>]} />
      <Route path='/userlogin' element={<Userlogin/>}/>
      <Route path='/navbar' element={<Navbar/>} />
      <Route path='/feedback' element={<Feedback/>} />
      <Route path='/userstarter' element={[<Navbar/>,<UserStarter/>]}/>
      <Route path='/userbeverages' element={[<Navbar/>,<UserBeverages/>]}/>
      <Route path='/usermaincourse' element={[<Navbar/>,<UserMaincourse/>]}/>
      <Route path='/payment' element={<Payment/>}/>
      <Route path='/usercart' element={<UserCart/>}/>
      {/********************************staff***********************************/}
      <Route path='/staffmenu' element={[<StaffNavbar/>,<StaffMenu/>]} />
      <Route path='/staffmenuadmin' element={<StaffMenu/>}/>
      <Route path='/staffregister' element={<Staffreg/>}/>
      <Route path='/stafflogin' element={<Stafflogin/>}/>
      <Route path="/addfood" element={<Staffaddfood/>}/>
      <Route path='/editfood/:id' element={<Staffeditfood/>}/>
      <Route path='/forgotpass' element={<StaffForgotPwd/>}/>
      <Route path='/staffnavbar' element={[<StaffNavbar/>,<HomePage/>,<Footer/>]}/>
      {/********************************Admin***********************************/}
      <Route path='/adminlogin' element={<Adminlogin/>}/>
      <Route path='/adminuserlist' element={<AdminUserList/>}/>
      <Route path='/adminnav' element={<Adminsidenav/>}/>
      <Route path="/admindashboard" element={[<Adminsidenav/>,<AdminDashboard/>]}/>
      <Route path='/adminstafflist' element={<AdminStafflist/>}/>
      </Routes> 
    </div>
     </BrowserRouter>
  )
}

export default App;
