import React, { useState } from 'react'
import axios from 'axios'
import '../Staff/Staffeditfood.css'
import { useParams } from 'react-router-dom';
function Staffeditfood() {
  const id=useParams()
  console.log("id",id);
    const [edit, setedit] = useState({
        name: "",
        description: "",
        price: "",
        img:null,
        ftype: ""
      });
      const handleChange = (e) => {
        setedit({ ...edit, [e.target.name]: e.target.value });
      };
    
      const handleFileChange = (e) => {
        const { name, files } = e.target;
        setedit({ ...edit, [name]: files[0] });
      };
    
      const onSubmitdata = (e) => {
        e.preventDefault();
        axios
          .post("http://localhost:4000/staffmenu", edit,{
            headers: {
              "Content-Type": "multipart/form-data",
            },
          })
          .then((result) => {
            console.log(result);
            if (result.data.staus === 200) {
              alert("succefully registered");
              console.log(result.data);
              console.log("submitted");
            }
          })
          .catch((error) => {
            console.log(error);
          });
      };
  return (
    <div>
      <div className="staffeditfood">
      <div className="staff_editfood_main">
        <form onSubmit={onSubmitdata}>
          <h1>Edit Food</h1>
          <div className='staff_editfood_main2'>
      <input type='string' placeholder='Food Name' name='name' onChange={handleChange} className='form-control' required/><br/>
      <input type='string' placeholder='Description' name='description' onChange={handleChange} className='form-control' required/><br/>
      <input type='number' placeholder='Price' onChange={handleChange} name='price' className='form-control' required/><br/>
      <input type="file" placeholder="Food Image" onChange={handleFileChange} name="img" className="form-control" required/><br/>
      <input type="string" placeholder="Food Type" onChange={handleChange} name="ftype" className="form-control" required/><br/>
         </div>
         <button type="submit" className="btn btn-danger">Save</button>
        </form>
      </div>
    </div>
    </div>
  )
}

export default Staffeditfood
