import React, { useEffect, useState } from 'react'
import '../Admin/AdminStafflist.css'
import axios from 'axios'
function AdminStafflist() {
    const[staffdata,setStaffdata]=useState([])
    useEffect(()=>{
        axios.post('http://localhost:4000/stafflist')
        .then((result)=>{
console.log(result);
setStaffdata(result.data.msg)
        })
        .catch((err)=>{
console.log(err,'error');
        })
    },[])
  return (
    <div>
        <div className='container'>
        <div className='row'>
            {staffdata.map((y)=>{
                return(
                  <div class="col-3">
                    <div class="card" style={{width:18+'rem'}} id='staffCard'>
                      <div className='top-section'>
                    <img id='staff-imag' src={`http://localhost:4000/${y.uploadyourphoto.filename}`} class="card-img-top" alt="..."/>
                    </div>
                    <div class="card-body" id='stafflist-card'>
                      <div className='bottom-section'>
                      <h5 class="card-title">{y.firstname} {y.lastname}</h5>
                      <p class="card-text">Age:{y.age}</p>
                      <p class="card-text">Contact no:{y.contactno}</p>
                      <p class="card-text">Email:{y.email}</p>
                      <p class="card-text">Address:{y.address}</p>
                      <p class="card-text">Job Position:{y.jobposition}</p>
                      
                      </div>

                      </div>
                    </div>
                 </div>
                )
            })}
       </div>
       </div>
                      </div> 
  )
}

export default AdminStafflist
