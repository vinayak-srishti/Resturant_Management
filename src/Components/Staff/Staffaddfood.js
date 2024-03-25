import React, { useState } from "react";
import "../Staff/Staffaddfood.css";
import axios from "axios";

function Staffaddfood() {
  const [fdata, setfdata] = useState({
    name: "",
    description: "",
    price: "",
    ftype: "",
    img: "",
  });
  const handleChange = (e) => {
    setfdata({ ...fdata, [e.target.name]: e.target.value });
  };
  const onSubmitdata = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/staffmenu", fdata)
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
      <div className="addfood_main">
        <form onSubmit={onSubmitdata}>
          <h1>Add Food</h1>
          <div className="addfood_name">
            Food Name
            <input
              type="text"
              name="name"
              className="form-control"
              onChange={handleChange}
            />
          </div>
          About Food
          <input
            type="text"
            name="description"
            className="form-control"
            onChange={handleChange}
          />
          Price
          <input
            type="number"
            name="price"
            className="form-control"
            onChange={handleChange}
          />
          Add Image
          <input
            type="file"
            accept=".png,.jpg,.jpeg"
            name="img"
            className="form-control"
            onChange={handleChange}
          />
          Food Type
          <select
            name="ftype"
            className="form-control "
            onChange={handleChange}
          >
            <option value={"none"}>Select Food Type</option>
            <option value={"starters"}>Starters</option>
            <option value={"maincourse"}>Main Course</option>
            <option value={"desserts"}>Desserts</option>
            <option value={"beverages"}>Beverages</option>
          </select>
          
          <button type="submit" className="btn btn-primary">
            SAVE
          </button>
        </form>
      </div>
    </div>
  );
}

export default Staffaddfood;
