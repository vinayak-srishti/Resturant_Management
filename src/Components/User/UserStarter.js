import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../User/UserStarter.css'
function UserStarter() {
  const userid=localStorage.getItem('user_id')
    const[data,setdata]=useState([])
    const[cartdata,setcartdata]=useState({
      foodid:'',
      userid:userid,
      count:1
    })

    useEffect(()=>{
      axios.post('http://localhost:4000/starter')
      .then((result)=>{
       console.log(result);
       setdata(result.data.msg)
       console.log(result.data.msg);
      })
      .catch((err)=>{
      console.log(err,'error');
      })
  },[])
  const addcart=(foodid)=>{
console.log("foodid",foodid);
cartdata.foodid=foodid

axios.post('http://localhost:4000/usercart',cartdata)
      .then((result)=>{
       console.log(result);
      })
      .catch((err)=>{
      console.log(err,'error');
      })
  } 
  // console.log("userid");
   return (
    
      <div className='Userstarter'>
      <div className="container">
            <div class="row">
            {data.map((a)=>{
        return (
              <div class="col-3">
                <div className='userstarter_card'>
                <div class="card" style={{ width: 18 + "rem" }}>
                  <div class='top-section'  className='starter_top'>
                  <img src={`http://localhost:4000/${a.img.filename}`} class="card-img-top" alt="..." />
                  </div>
                  <div className='userstarter_bottom'>
                  <div class="card-body" >
                    <h5 class="bottom-section" style={{fontWeight:"600",fontSize:"20px",WebkitTextFillColor:"black"}}>{a.name}</h5>
                    <p class="card-text" >
                      <h6 style={{fontWeight:"600",fontSize:"20px"}}>RS. {a.price} </h6>
                      {a.description}
                      <br/>
                    </p>
             <button type='button' className='btn btn-danger' style={{marginLeft:"8rem",width:"7rem"}} onClick={()=>addcart(a._id)}>Add</button>
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

export default UserStarter