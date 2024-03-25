import React, { useState } from "react";
import '../Staff/Staffaddfood.css';
import axios from "axios";

function Staffaddfood() {
  const [fdata, setfdata] = useState({
    name: "",
    description: "",
    price: "",
    img:"",
    ftype: "",
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
    // console.log(form); 
  };

  return (
    <div>
      <div className="addfood_main">
        <form onSubmit={onSubmitdata}>
          <h1>Add Food</h1>
          <table>
            <tr>
              <td>Food Name</td   >
              <td>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  onChange={handleChange}
                />
              </td>
            </tr>

            <tr>
              <th>Food Description</th>
              <td>
                <input
                  type="text"
                  name="description"
                  className="form-control"
                  onChange={handleChange}
                />
              </td>
            </tr>

            <tr>
              <th>Price</th>
              <td>
                <input
                  type="number"
                  name="price"
                  className="form-control"
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <th>Add Image</th>
              <td>
                <input
                  type="file"
                  accept=".png,.jpg,.jpeg"
                  name="img"
                  className="form-control"
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <th>Food Type</th>
              <td>
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
              </td>
            </tr>
          </table>
          <button type="submit" className="btn btn-primary">
            SAVE
          </button>
        </form>
      </div>
    </div>
  );
}

export default Staffaddfood;
