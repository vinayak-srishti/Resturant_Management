import React, { useEffect, useState } from 'react'
import axios from 'axios';
import "../User/UserCart.css";
function UserCart() {
  const [cartdata, setcarddata] = useState([]);
//   const id=localStorage.getItem(userid,data_id)
  useEffect(() => {
    axios
      .post(`http://localhost:4000/usercartfind ${id}`)
      .then((result)=>{
        console.log(result);
        setcarddata(result.data.msg);
      })
      .catch((err)=>{
        console.log(err, "error");
      });
  }, []);
  const handleremove=()=>{
    alert("item removed")
    console.log("id for deletion",id)
    axios.post(`http://localhost:4000/deleteitem/${id}`)
    .then((res)=>{
        console.log(res);
        
      })
      .catch((err)=>{
        console.log(err);
      });
  }; 
  return (
    <div>
     {cartdata.map((y)=>{
                return(
                   < div class="card">
                    <div class="card-header">
                      {y.name}
                    </div>
                    <div class="card-body">
                      <h5 class="card-title">{y.price}</h5>
                      <p class="card-text">{y.description}</p>
                      <button class="btn btn-primary" onClick={handleremove}>Remove</button>
                    </div>
                  </div>
     )})}
    </div> 
  );
}

export default UserCart;
