import React from 'react'
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min';
import AdminStafflist from './Components/Admin/AdminStafflist';
import HomePage from './Components/User/HomePage';
import UserRegistration from './Components/User/UserRegistration'
import Footer from './Components/User/Footer';
import Staffreg from './Components/Staff/Staffreg';
import ContacttUs from './Components/User/ContacttUs';
import Stafflogin from './Components/Staff/Stafflogin';

// import HomePage from './Components/User/HomePage';
// import UserRegistration from './Components/User/UserRegistration'
// import Footer from './Components/User/Footer';
import Gallery from './Components/User/Gallery';
import StaffMenu from './Components/Staff/StaffMenu';
import Userresetpassword from './Components/User/Userresetpassword';


function App() {
  return ( 
    <BrowserRouter>
    <div>
{/* <Stafflogin/> */}
{/* <Gallery/> */}

 {/* <Staffreg/> */}
{/* <ContacttUs/> */}
{/* <StaffMenu/> */}
 

       <Routes> 
      <Route path='/gallery' element={<Gallery/>} />
      <Route path='/userregistration' element={<UserRegistration/>} />
      <Route path='/footer' element={<Footer/>} />
      <Route path='/homepage' element={<HomePage/>} />
      <Route path='/staffmenu' element={<StaffMenu/>} />
      <Route path='/staffreg' element={<Staffreg/>}/>
      <Route path='/stafflogin' element={<Stafflogin/>}/>
      <Route path='/contactus' element={<ContacttUs/>}/>
      <Route path="/adminstafflist" element={<AdminStafflist/>}/>
      <Route path='/userresettpassword' element={<Userresetpassword/>}/>
      </Routes> 
    </div>
     </BrowserRouter>
  )
}

export default App
