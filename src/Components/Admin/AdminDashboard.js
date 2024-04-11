import React, { useEffect, useState } from 'react'
import '../Admin/AdminDashboard.css'
import axios from 'axios'
function AdminDashboard() {
  const [order,setorder]=useState([])
  useEffect(()=>{
    axios.post('http://localhost:4000/transdetails')
    .then((result)=>{
console.log(result);
setorder(result.data.msg)
    })
    .catch((err)=>{
console.log(err,'error');
    })
  },[])
useEffect(()=>{
console.log(order);
},[order])
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


  <div>
  <table class="table table-hover table-dark">
  <thead>
    <tr>
      <th scope="col">Usermail</th>
      <th scope="col">Food Name</th>
      <th scope="col">Count</th>
      <th scope="col">Price</th>
      <th scope="col">Date</th>
      <th scope="col">Time</th>

    </tr>
  </thead>
<tbody>
    {order.map((y)=>{
      console.log(y.usermail)
      return(<tr>     
      <td>{y.usermail}</td>
      <td>{y.fitem}</td>
      <td>{y.fcount}</td>
      <td>{y.fprice}</td>
      <td>{y.date}</td>
      <td>{y.time}</td>


      

    </tr>
   
   
  

        
      )
    })}
    </tbody>
    </table>
  </div>
</div>
    </div>
  )
}

export default AdminDashboard
