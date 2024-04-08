import React from 'react'
import '../Admin/Adminsidenav.css'
import { BiFoodMenu } from "react-icons/bi";
import { PiUserList } from "react-icons/pi";
import { TbListDetails } from "react-icons/tb";
import { GrTransaction } from "react-icons/gr";
import { FaBorderAll } from "react-icons/fa";
import { VscFeedback } from "react-icons/vsc";
function Adminsidenav() {
    
  return (
    <div>
      <div className="sidenav" style={{ width: '25%', paddingTop: '20px' }}>
      <a href="#section"><BiFoodMenu  style={{fontSize:25,color:'white',marginRight:"1rem"}}/>Menu</a>
      <a href="#section"><PiUserList  style={{fontSize:25,color:'white',marginRight:"1rem"}}/>User List</a>
      <a href="#section"><TbListDetails  style={{fontSize:25,color:'white',marginRight:"1rem"}}/>Staff List</a>
      <a href="#section"><GrTransaction  style={{fontSize:25,color:'white',marginRight:"1rem"}}/>Transaction History</a>
      <a href="#section"><FaBorderAll  style={{fontSize:25,color:'white',marginRight:"1rem"}}/>Order History</a>
      <a href="#section"><VscFeedback  style={{fontSize:25,color:'white',marginRight:"1rem"}}/>FeedBack</a>
    </div>
    
    </div>
  )
}

export default Adminsidenav
