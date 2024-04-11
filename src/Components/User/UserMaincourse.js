import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../User/UserMaincourse.css'
function UserMaincourse() {
    const[data,setdata]=useState([])
    useEffect(()=>{
      axios.post('http://localhost:4000/maincourse')
      .then((result)=>{
       console.log(result);
       setdata(result.data.msg)
       console.log(result.data.msg);
      })
      .catch((err)=>{
      console.log(err,'error');
      })
  },[])
  return (
    <div className='Usermaincourse'>
      <div className="container">
            <div class="row">
            {data.map((a)=>{
        return (
              <div class="col-3">
                <div className='usermaincourse_card'>
                <div class="card" style={{ width: 18 + "rem" }}>
                  <div class='top-section'  className='maincourse_top'>
                  <img src={`http://localhost:4000/${a.img.filename}`} class="card-img-top" alt="..." />
                  </div>
                  <div className='usermaincourse_bottom'>
                  <div class="card-body" >
                    <h5 class="bottom-section"  style={{fontSize:"20px",fontFamily:'Bona Nova',WebkitTextFillColor:"black"}}>{a.name}</h5>
                    <p class="card-text" >
                      <h6 style={{fontWeight:"600",fontSize:"20px"}}>RS. {a.price} </h6>
                      {a.description}
                      <br/>
                    </p>
                    <button type='button' className='btn btn-danger' style={{marginLeft:"8rem",width:"7rem"}}>Add</button>
                  </div>
                  </div>
                </div>
              </div>
              </div>
                );
              })}
            </div>
          </div>
    </div>
  )
}

export default UserMaincourse

