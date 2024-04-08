import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../Staff/StaffMenu.css'
import { useParams } from 'react-router-dom'
function StaffMenu() {
    const [axiosdata,setaxiosdata]=useState([])
    // const {id}=useParams()
    // console.log(id)
    useEffect(()=>{
        axios.post('http://localhost:4000/menucard')
        .then((result)=>{
         console.log(result);
         setaxiosdata(result.data.msg)
         console.log(result.data.msg);
        })
        .catch((err)=>{
        console.log(err,'error');
        })
    },[])

    const handleclick=((id)=>{
      console.log("id for deletion",id);
      axios.post(`http://localhost:4000/deletecard/${id}`)
      .then((res) => {
        console.log(res);
        // setaxiosdata(res.data.msg);
      })
      .catch((err) => {
        console.log(err);
      });
    })
  return (
    <div>
           
          <div className="container">
            <div class="row">
             {axiosdata.map((a)=>{
        return (
              <div class="col-3">
                <div class="card" style={{ width: 18 + "rem" }}>
                  <div class="top-section">
                  <img src={`http://localhost:4000/${a.img.filename}`}class="card-img-top" alt="..." />
                  </div>
                  <div class="card-body">
                    <div class="bottom-section">
                    <h5 id='staffmenu_name'  class="card-title">{a.name}</h5>
                    <p class="card-text">
                      <h6> {a.price} </h6>
                      {a.description}
                      <br/>
                    </p>
                    <a href="#" class="btn btn-primary">
                    Edit
                    </a>
                    <button
                      class="btn btn-danger"
                      style={{ marginLeft: "2rem" }}  onClick={()=>{handleclick(a._id)}}> Delete</button>
                  </div>
                </div>
                </div>
              </div>
                );
              })} 
            </div>
          </div>
      
      
    </div>
  );
}

export default StaffMenu

