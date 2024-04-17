import React, { useEffect, useState } from 'react'
import axios from 'axios';
import "../User/UserCart.css";
function UserCart() {
  const [cartdata, setcarddata] = useState([]);
 const [foodprice,setfoodprice]=useState([])
 const [totalprice,setprice]=useState([])

  const id=localStorage.getItem('user_id')
  useEffect(() => {
    console.log("id",id);
    axios
      .post(`http://localhost:4000/usercartfind/${id}`)
      .then((result)=>{
        console.log(result.data.msg);
        setcarddata(result.data.msg);
      })
      .catch((err)=>{
        console.log(err, "error");
      });
  }, []);
  console.log(cartdata);
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
  const pricechange=(e)=>{
    setfoodprice(e.target.value)
  }
  return (
    <div>
     {cartdata.map((y)=>{
                return(
                   < div class="card">
                    <div class="card-header">
                      {y.foodid.name}
                    </div>
                    <div class="card-body">
                      <h5 class="card-title" onChange={pricechange}>{y.foodid.price}</h5>
                      <p class="card-text">{y.foodid.description}</p>
                      <input type='number' placeholder='Count'/>
                      <button class="btn btn-primary" onClick={handleremove}>Remove</button>
                    </div>
                  </div>
     )})}
    </div> 
  );
}

export default UserCart;
