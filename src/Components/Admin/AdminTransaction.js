import React, { useEffect, useState } from 'react'
import axios from "axios"


function AdminTransaction() {
const [transdata,setTransdata]=useState([])
useEffect(()=>{
  axios.post("http://localhost:4000/transhistory")
  .then((result)=>{
    console.log(result);
    setTransdata(result.data.msg)
  })
  .catch((err)=>{
    console.log(err,"error");
  })
},[])
  return (
    <div>
         <table class="table table-hover" cellSpacing={"10px"} cellPadding={"5px"}>
          <thead>
            <tr>
              
              <th scope="col">User</th>
              <th scope='col'>Food Name</th>
              <th scope="col">Price</th>

             
            </tr>
          </thead>

         {transdata.map((y)=>{
            return(
                <tr>
                   <td>{y.usermail}</td>
                   <td>{y.fitem}</td>
                   <td>{y.fprice}</td> 
                </tr>
         )})} 
         </table>
      
    </div>
  )
}

export default AdminTransaction
