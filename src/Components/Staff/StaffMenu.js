import React, { useEffect, useState } from 'react'
import axios from 'axios'
function UserMenu() {
    const[axiosdata,setaxios]=useState([])
    useEffect(()=>{
        axios.get('http://localhost:3000/menucard')
        .then((result)=>{
            setaxios(result.data)
        })
        .catch((error)=>{
        console.log("error",error);
        })
    })

  return (
    <div>
      {axiosdata.map((a)=>{
          return(
            <div><div class="card" style={{width: 18+ "rem"}}>
            <img src={a.img} class="card-img-top" alt="..."/>
            <div class="card-body">
              <h5 class="card-title">{a.name}</h5>
              <p class="card-text">{a.description}</p>
              <p class="card-text">{a.price}</p>
              <a href="#" class="btn btn-primary" style={{marginLeft:2+"rem"}}>Buy Now</a>
              <a href="#" class="btn btn-danger"  style={{marginLeft:2+"rem"}}>Remove</a>
            </div>
          </div></div>
          )
         })}
    </div>
  )
}

export default UserMenu
