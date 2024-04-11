import React, { useEffect, useState } from 'react'
import '../Admin/AdminDashboard.css'
import axios from 'axios'
function AdminDashboard() {
  const [order,setorder]=useState([])

  return (
    <div  className='admindash_card'>
      <div class="row">
  <div class="col-sm-6 mb-3 mb-sm-0">
    <div class="card"id='dash_users'>
      <div class="card-body">
        <h5 class="card-title" style={{fontFamily:"Courier New', Courier, monospace"}}>USERS</h5>
        <p class="card-text" style={{fontFamily:"Courier New', Courier, monospace"}}>Total no of available users:</p>
        
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card" id='dash_staff'>
      <div class="card-body">
        <h5 class="card-title">STAFFS</h5>
        <p class="card-text">Total no of available staffs:</p>
        
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default AdminDashboard
