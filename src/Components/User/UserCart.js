import React, { useEffect, useState } from "react";
import axios from "axios";
import "../User/UserCart.css";
import { Link } from "react-router-dom";
function UserCart() {
  const [cartdata, setcarddata] = useState([]);
  const [cartUpdated, setCartUpdated] = useState([])
  const id = localStorage.getItem("user_id");
  const [cartTotal, setCartTotal] = useState(0)
  const [unitTotal, setUnitTotal] = useState([{
    id:0,
    count:0,
    price:0
  }]);
  
  useEffect(() => {
    // console.log("id", id);
    axios
      .post(`http://localhost:4000/usercartfind/${id}`)
      .then((result) => {
        // console.log(result.data.msg);
        let newArr = result.data.msg.map((item) => {
          let newObj = {...item, totalPrice: 0}
          return newObj
        })
        console.log("udpated arr", newArr)
        setcarddata(result.data.msg);
        setCartUpdated(newArr)
      })
      .catch((err) => {
        console.log(err, "error");
      });
  }, []);
  useEffect(() => {
      let gTotal = 0;

    if (cartUpdated.length > 0) {
        cartUpdated.forEach((item) => {
          gTotal += item.totalPrice;
        })

      }
      setCartTotal(gTotal)
  }, [cartUpdated])
  // console.log(cartdata);
  // console.log("new arr", unitTotal)
  
  const onChangeCount = (e, price,index) => {
    console.log(e.target.value);
    let qty = e.target.value;
    let grandTotal = qty * price;
    let copyCart = [...cartUpdated];
    copyCart[index].totalPrice = grandTotal;
    setCartUpdated(copyCart)

    

    // setUnitTotal(updatedItems);


    // console.log(price);
    // unitTotal[unitTotal.length]=(e.target.value )*price
    // setUnitTotal({ ...unitTotal, unitTotal: e.target.value * price });
    // console.log(unitTotal);
    // unitTotal[index].id=index
    // unitTotal[index].count=(e.target.value)
    // unitTotal[index].price=(e.target.value )*price


    console.log(unitTotal[index]);
    };
  const countcalculate = (e,price) => {
    setUnitTotal({ ...unitTotal, unitTotal: e.target.value * price });
    // console.log(unitTotal);
  };
  const handleremove = (id) => {
    console.log("id for deletion", id);
    axios
      .post(`http://localhost:4000/deleteitem/${id}`)
      .then((res) => {
        console.log(res);
        alert("item removed");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="usercart">
      {cartUpdated.map((y,index) => {
        console.log("itr", y)
        return (
          <div className="usercartcard">
            <div class="card">
              
              <div class="card-header" style={{ fontSize: "25px" }}>
                {y.foodid?.name}
              </div>
              <div class="card-body">
                <h5
                  class="card-title"
                  style={{ fontFamily: "Bona Nova", fontSize: "25px" }}
                >
                  RS.{y.foodid?.price}
                </h5>

                <button
                  class="btn btn-primary"
                  onClick={() => {
                    handleremove(y._id);
                  }}
                >
                  Remove
                </button>
                <input
                  type="number"
                  onChange={($event) => {
                    onChangeCount($event, y.foodid?.price,index);
                  }}
                  placeholder="count"
                  style={{ width: "5rem", marginLeft: "3rem" }}
                />
                {/* {console.log(index)} */}

                {/* <input type="text"   value={unitTotal[index].price} /> */}
                
                <span> Total Price: {y.totalPrice} </span>
              </div>
            </div>
          </div>
        );
      })}
      
      <Link to={`/payment`}
        type="button"
        className="btn btn-danger"
        style={{ marginTop: "6.5rem", height: "5rem", width: "96rem" }}
        
      >
        Total:{cartTotal}
      </Link>
    </div>
  );
}

export default UserCart;
