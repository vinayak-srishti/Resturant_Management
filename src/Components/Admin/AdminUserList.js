import React, { useEffect, useState } from "react";
import axios from "axios";
function AdminUserList() {
  const [userdata, setuserdata] = useState([]);
  useEffect(() => {
    axios
      .post("http://localhost:4000/")
      .then((result) => {
        console.log(result);
        setuserdata(result.data.msg);
      })
      .catch((err) => {
        console.log(err, "error");
      });
  }, []);

  return (
    <div>
      <div>
        {userdata.map((y)=>{
            return(
                <div class="card">
                <div class="card-header">{y.email}</div>
                <div class="card-body">
                  <h6 class="card-title">{y.firstname}  
                  {y.lastname}</h6>
                  <p class="card-text">
                    {y.contactno}
                  </p>
                  <br />
                  <p class="card-text">Address : {y.address}<br/>{y.district}<br/>{y.state}</p>
                </div>
              </div>
            )
        })}
        
      </div>
    </div>
  );
}

export default AdminUserList;
