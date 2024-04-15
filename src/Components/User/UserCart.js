import React, { useEffect, useState } from 'react'
import axios from 'axios';
import "../User/UserCart.css";
function UserCart() {
  const [cartdata, setcarddata] = useState([]);
  const id=localStorage.getItem('user_id')
  useEffect(() => {
    console.log("id",id);
    axios
      .post(`http://localhost:4000/usercartfind`)
      .then((result)=>{
        console.log(result.data.msg);
        setcarddata(result.data.msg);
      })
      .catch((err)=>{
        console.log(err, "error");
      });
  }, []);
  console.log(cartdata);

  const handleremove=((id)=>{
    console.log("id for deletion",id)
    axios.post(`http://localhost:4000/deleteitem/${id}`)
    .then((res)=>{
        console.log(res);
        alert("item removed")
      })
      .catch((err)=>{
        console.log(err);
      });
  }); 
  return (
    <div>
     {cartdata.map((y)=>{
                return(
                   < div class="card">
                    <div class="card-header">
                      {y.foodid.name}
                    </div>
                    <div class="card-body">
                      <h5 class="card-title">{y.foodid.price}</h5>
                      <p class="card-text">{y.foodid.description}</p>
                      <button class="btn btn-primary" onClick={()=>{handleremove(y._id)}}>Remove</button>
                    </div>
                  </div>
     )})}
    </div> 
  );
}

export default UserCart;
