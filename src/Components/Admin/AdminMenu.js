import React, { useEffect, useState } from 'react'
import axios from 'axios'
function AdminMenu() {
    const[adminmenu,setadminmenu]=useState([])
    useEffect(()=>{
        axios.post('http://localhost:4000/menucard')
        .then((result)=>{
            console.log(result);
            setadminmenu(result.data.msg)
            console.log(result.data.msg);
           })
           .catch((err)=>{
           console.log(err,'error');
           })
       },[])

  return (
    <div>
      <div className="container">
            <div class="row">
            {data.map((a)=>{
        return (
              <div class="col-3">
                <div class="card" style={{ width: 18 + "rem" }}>
                  <img src={`http://localhost:4000/${a.img.filename}`} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">{a.name}</h5>
                    <p class="card-text">
                      <h6> {a.price} </h6>
                      {a.description}
                      <br/>
                    </p>
                   
                    <button
                      class="btn btn-danger"
                      style={{ marginLeft: "2rem" }}
                   
                    >
                      Add
                    </button>
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

export default AdminMenu
