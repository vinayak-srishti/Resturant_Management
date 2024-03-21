import React, { useEffect, useState } from "react";
import axios from "axios";
import "../Staff/StaffMenu.css";
function StaffMenu() {
  const [axiosdata, setaxiosdata] = useState([]);
  useEffect(() => {
    axios.post("http://localhost:4000/menucard").then((result) => {
      console.log(result);
      setaxiosdata(result.data.msg);
    });
  });
  return (
    <div>
     
          <div className="container">
            <div class="row">
            {axiosdata.map((a) => {
        return (
              <div class="col-3">
                <div class="card" style={{ width: 18 + "rem" }}>
                  <img src={`http://localhost:4000/${a.img.filename}`} class="card-img-top" alt="..."/>
                  <div class="card-body">
                    <p class="card-title">{a.name}</p>
                    <p class="card-text">
                      <h6> {a.price} </h6>
                      {a.description}
                      <br/>
                    </p>
                    <a href="#" class="btn btn-primary">
                      Edit
                    </a>
                    <button
                      class="btn btn-danger"
                      style={{ marginLeft: "2rem" }}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
               );
              })}
            </div>
          </div>
       
    </div>
  );
}

export default StaffMenu;
