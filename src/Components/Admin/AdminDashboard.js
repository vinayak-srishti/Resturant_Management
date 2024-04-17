import React, { useEffect, useState } from 'react'
import '../Admin/AdminDashboard.css'
import axios from 'axios'
function AdminDashboard() {

  const [order,setorder]=useState([])
const [scount,setscount]=useState([])
const [ucount,setucount]=useState([])
  useEffect(()=>{
    axios.post('http://localhost:4000/orderhistory')
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
useEffect(()=>{
 

  axios.post('http://localhost:4000/staffcount')
 
  .then((result)=>{
    // console.log(result.data.msg);
    setscount(result.data.msg)
     console.log("scount",scount);
        })
        .catch((err)=>{
    console.log(err,'error');
        })
     
})
useEffect(()=>{
  axios.post('http://localhost:4000/usercount')  
  .then((result)=>{
    // console.log(result.data.msg);
    setucount(result.data.msg)
     console.log("ucount",ucount);
        })
        .catch((err)=>{
    console.log(err,'error');
        })
},[ucount])
  return (
    <div  className='admindash_card'>
      <div class="row">
  <div class="col-sm-6 mb-3 mb-sm-0">
    <div class="card"id='dash_users'>
      <div class="card-body">
        <h5 class="card-title" style={{fontFamily:"Courier New', Courier, monospace"}}>USERS</h5>
        <p class="card-text" style={{fontFamily:"Courier New', Courier, monospace"}}>Total no of available users:{ucount}</p>
        {/* <button onClick={handleklik}>See Now</button> */}
        {/* <button onClick={handleklik} type="button" class="btn btn-dark">See Now</button> */}
       
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card" id='dash_staff'>
      <div class="card-body">
        <h5 class="card-title">STAFFS</h5>
        <p class="card-text">Total no of available staffs:{scount}</p>
        {/* <button onClick={handleclick} type="button" class="btn btn-dark">See Now</button> */}
        
        
        
      </div>
    </div>
  </div>


  <div>
  <table class="table table-hover table-dark" id='admindashtable'>
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
