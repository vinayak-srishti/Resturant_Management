import React from "react";
import img1 from "../../Images/142488.jpg";
import '../User/AboutUs.css'

function Aboutus() {
  return (
    <div>
      <div className="main1">
        <div className="container1">
          <h1 id="hd">About Us</h1>
          <h2 id="subhd">Welcome to EL-Demeter</h2>
        </div>
      </div>
      <div className="main2">
        <div className="container2">
          <h2 id="hd2">
            {" "}
            <u>Our Story</u>
          </h2>
          <p id="p1">
            Salt is based on a very simple mantra; “Most delicious Indian
            recipes that reflect the real taste and soul of Indian Food which is
            served in a cheerful restaurant where food lovers can relax and eat
            with their fingers if they wish.” At SALT we experiment with the
            finest Indian spices and ingredients along with diverse cooking
            techniques to recreate traditional recipes, providing each diner
            with an aromatic. visual and flavorful dining experience.{" "}
          </p>
        </div>
      </div>

      <div className="main3">
        <h2 id="hd3">Our Chefs</h2>
        <div className="czn">
          <img src={img1} id="czn" />
         
          <p id="para">
          <u ><span >BURAK ÖZDEMIR</span></u>, known as CZN Burak, is a Turkish chef and restaurateur.
          His nickname CZN originates from a frequent mispronunciation of the
          Cinzano, the name of his father's textile shop in Laleli, Istanbul
        </p> 

        </div>
        
      </div>
    </div>
  );
}

export default Aboutus;
