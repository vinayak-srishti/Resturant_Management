import axios from 'axios'
import React, { useEffect, useState } from 'react'
function AdminFundHistory() {

   const [fund,setfund]=useState([])
   useEffect(()=>{
    axios.post('http://localhost:4000/transhistory')
    .then((result)=>{
        console.log(result);
        setfund(result.data.msg)
            })
            .catch((err)=>{
        console.log(err,'error');
            })
          },[])




  return (


    <div className='Adminfund'>
       <table class="table table-hover table-dark" id='admindashtable' style={{width:"90rem",marginTop:"-0.3rem"}}>
  <thead>
    <tr>
      <th scope="col" style={{WebkitTextFillColor:"red",fontSize:"20px"}}>Usermail</th>
      <th scope="col" style={{WebkitTextFillColor:"red",fontSize:"20px"}}>Food Name</th>
      <th scope="col"style={{WebkitTextFillColor:"red",fontSize:"20px"}}>Price</th>
   
    </tr>
  </thead>
<tbody>
    {fund.map((y)=>{
      console.log(y.usermail)
      return(<tr>     
      <td>{y.usermail}</td>
      <td>{y.fitem}</td>
      <td>{y.fprice}</td>
     
    </tr>      
      )
    })}
    </tbody>
    </table>
    </div>
  )
}

export default AdminFundHistory
