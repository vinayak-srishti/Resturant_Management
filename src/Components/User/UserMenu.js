import React, { useEffect, useState } from 'react'
import axios from 'axios'
import "../User/UserMenu.css"
function UserMenu() {
  const[count,setcount]=useState(0)
  const increment=()=>{
      setcount(count+1)
  }
  const decrement=()=>{
      setcount(count-1)
  }
    const[data,setdata]=useState([])
    useEffect(()=>{
      axios.post('http://localhost:4000/menucard')
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
              <button onClick={decrement}  style={{width:"3rem",marginLeft:"0.5rem" }}>-</button>
              <button onClick={increment}  style={{width:"3rem" ,marginLeft:"0.5rem"}}>+</button>
                   <button style={{width:"3rem",marginLeft:"5rem"}}>{count}</button> 
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

export default UserMenu
