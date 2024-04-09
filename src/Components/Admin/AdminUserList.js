import React, { useEffect, useState } from "react";
import axios from "axios";
import "../Admin/AdminUserList.css";
function AdminUserList() {
  const [userdata, setuserdata] = useState([]);
  useEffect(() => {
    axios
      .post("http://localhost:4000/userlist")
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
      <table class="table table-hover" cellSpacing={"10px"} cellPadding={"5px"}>
          <thead>
            <tr>
              
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Contact</th>
              <th scope="col">Address</th>
            </tr>
          </thead>
          
          {userdata.map((y) => {
            return (
              
              
                  <tr>
                    <td>{y.firstname} {y.lastname}</td>
                    <td>{y.contactno}</td>
                    <td>{y.email}</td>
                    <td>{y.address},{y.district}</td>
                  </tr>
               
            
            );
          })}
             </table>
        
      </div>
    </div>
  );
}

export default AdminUserList;
