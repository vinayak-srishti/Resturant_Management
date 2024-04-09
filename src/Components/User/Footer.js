import React from 'react'
import '../User/Footer.css'
import { IoIosCall} from 'react-icons/io';
import {AiOutlineMail} from 'react-icons/ai'
function Footer() {
  return (
    <div>
      <footer className='footer'>
            <div className='footer-row'>
      <div className='footer-col1'>
       <h1>El Demeter</h1>
       <p>Join us on a journey where every bite tells a story of quality, flavor, and culinary mastery.</p>
      </div>
      <div className='footer-col2'>
        <h1>Phone & Email</h1>
        <h5><IoIosCall style={{fontSize:20,color:'red'}}/>+91 9876543210</h5>
        <h5 id='footer-email'><AiOutlineMail style={{fontSize:20 ,color:'red'}}/>eldemeter@gmail.com</h5>
      </div>
      <div className='footer-col3'>
        <h1>Our Address</h1>
        <p>Jazz Arcade,NH 66,Vyttila,</p>
        <p>Kochi,Kerala 682019</p>
      </div>
      <div className='footer-col4'>
        <h1>Opening Hours</h1>
        <p>Mon-Fri:10.00AM to 12PM</p>
        <p>Sunday:Closed</p>
      </div>
      </div>
        </footer>
    </div>
  )
}

export default Footer
