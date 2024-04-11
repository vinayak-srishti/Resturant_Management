import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../User/UserBeverages.css'
function UserBeverages() {
    const[count,setcount]=useState(0)
  const increment=()=>{
      setcount(count+1)
  }
  const decrement=()=>{
      setcount(count-1)
  }
    const[data,setdata]=useState([])
    useEffect(()=>{
      axios.post('http://localhost:4000/beverages')
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
    <div className='Userbeverages'>
      <div className="container">
            <div class="row">
            {data.map((a)=>{
        return (
              <div class="col-3">
                <div className='userbeverages_card'>
                <div class="card" style={{ width: 18 + "rem" }}>
                  <div class='top-section'  className='beverages_top'>
                  <img src={`http://localhost:4000/${a.img.filename}`} class="card-img-top" alt="..." />
                  </div>
                  <div className='userbeverages_bottom'>
                  <div class="card-body" >
                    <h5 class="bottom-section" >{a.name}</h5>
                    <p class="card-text" >
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
              </div>
              </div>
                );
              })}
            </div>
          </div>
    </div>
  )
}

export default UserBeverages
