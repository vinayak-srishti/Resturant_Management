import React, { useState,useEffect } from 'react'

import axios from 'axios'
function Orderhistory() {
    const [order,setorder]=useState([])
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
  return (
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
  )
}

export default Orderhistory
