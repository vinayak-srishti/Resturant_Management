import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../User/Feedback.css'
function Feedback() {
    const[feed,setfeed]=useState([])
    useEffect(()=>{
        axios.post('http://localhost:4000/contactfeed')
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
      
    </div>
  )
}

export default Feedback
