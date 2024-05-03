import React, { useState } from "react";
import '../Staff/Staffaddfood.css';
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Staffaddfood() {
  const [fdata, setfdata] = useState({
    name: "",
    description: "",
    price: "",
    img:null,
    ftype: ""
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    setfdata({ ...fdata, [e.target.name]: [e.target.value] });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setfdata({ ...fdata, [name]: files[0] });
  };

  const onSubmitdata = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/staffmenu", fdata,{
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((result) => {
        console.log(result);
        if (result.data.status === 200) {
          
          console.log(result.data);
          console.log("submitted");
          
        }
      })
      .catch((error) => {
        console.log(error);
      });
      alert("Food Added To Menu");
      navigate('/staffmenu')
  };

  return (
    <div className="staffaddfood">
      <div className="staff_addfood_main">
        <form onSubmit={onSubmitdata}>
          <h1>Add Food</h1>
          <div className='staff_addfood_main2'>
      <input type='string' placeholder='Food Name' name='name' onChange={handleChange} className='form-control' required/><br/>
      <input type='string' placeholder='Description' name='description' onChange={handleChange} className='form-control' required/><br/>
      <input type='number' placeholder='Price' onChange={handleChange} name='price' className='form-control' required/><br/>
      <input type="file" placeholder="Food Image" onChange={handleFileChange} name="img" className="form-control" required/><br/>
      <input type="string" placeholder="Food Type" onChange={handleChange} name="ftype" className="form-control" required/><br/>
         </div>
         <button type="submit" className="btn btn-danger">Add to menu</button>
        </form>
      </div>
    </div>
  );
}

export default Staffaddfood;
