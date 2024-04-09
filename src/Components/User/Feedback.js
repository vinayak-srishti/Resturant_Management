import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../User/Feedback.css'
function Feedback() {
    const[feedback,setfeedback]=useState([])
    useEffect(()=>{
        axios.post('http://localhost:4000/feedback')
        .then((result)=>{
         console.log(result);
         setfeedback(result.data.msg)
         console.log(result.data.msg);
        })
        .catch((err)=>{
        console.log(err,'error');
        })
    },[])
     
    
  return (
    <div className='feedback'>
    <h1 id='feedback-heading'>FeedBack Of EL-Demeter</h1>
      <div className='container' id='feedcontainer'>
      
      {feedback.map((a)=>{
        return(
          <div class="card" style={{marginTop:"1.5rem"}} id='feedcard'>
  <div className="card-header">
    {a.name}
  </div>
  <div className="card-body">
    <blockquote className="blockquote mb-0">
      <p>{a.subject}</p>
      <footer className="blockquote-footer">{a.message}</footer>
    </blockquote>
  </div>
</div>
        )
      })}
      </div>
      
      
      </div>
    
  )
}

export default Feedback
