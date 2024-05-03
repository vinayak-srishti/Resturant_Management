import React from "react";
import img1 from "../../Images/142488.jpg";
import "../User/AboutUs.css";
import img2 from "../../Images/images.jpeg";
import img3 from '../../Images/About_img3.jpg'
import img4 from '../../Images/About_img4.jpg'
import img5 from '../../Images/About_img5.jpg'
import { Link } from "react-router-dom";


function Aboutus() {
  const handlechange=()=>{

  }
  return (
    <div>
      <div className="Aboutus_page1">
        <div className="container1">
          <h1 id="hd">About Us</h1>
          <h2 id="subhd">Welcome to EL-Demeter</h2>
        </div>
      </div>
      <div className="Aboutus_page2">
        <div className="container2">
          <form>
          <h2>
            {" "}
            <u>Our Story</u>
          </h2>
          <p >
            Salt is based on a very simple mantra; “Most delicious Indian
            recipes that reflect the real taste and soul of Indian Food which is
            served in a cheerful restaurant where food lovers can relax and eat
            with their fingers if they wish.” At SALT we experiment with the
            finest Indian spices and ingredients along with diverse cooking
            techniques to recreate traditional recipes, providing each diner
            with an aromatic. visual and flavorful dining experience.
          </p>
          </form>
        </div>
        <div className="aboutus_img3">
        <img src={img3} />
        </div>
        <div className="aboutus_img4">
          <img src={img4}/>
        </div>
        <div className="aboutus_img5">
          <img src={img5}/>
        </div>
      </div>

      <div className="Aboutus_page3">
        <h2>Our Chefs</h2>
        <div className="aboutus_img1">
          <img src={img1} />
          </div>
          <form>
          <p>
            <u>
              <span>BURAK ÖZDEMIR</span>
            </u>
            , known as CZN Burak, is a Turkish chef and restaurateur. His
            nickname CZN originates from a frequent mispronunciation of the
            Cinzano, the name of his father's textile shop in Laleli, Istanbul
          </p>
          </form>
      </div>
      <div className="Aboutus_page4">
        <form>
      <p>
         <u> NUSRET Gökçe</u>, nicknamed Salt Bae, is a Turkish butcher, chef, and
          restaurateur, whose technique for preparing and seasoning meat became
          an internet meme in January 2017. He founded Nusr-Et, a chain of
          luxury steak houses
        </p>
        </form>
        <div className="aboutus_img2">
        <img src={img2}  />
        </div>
       
      </div>
      <div className="Aboutus_button">
        <Link to={`/feedback`} type="button" id="btn" class="btn btn-danger" onClick={handlechange}>Feedbacks</Link>
        </div>
     
    </div>
  );
}

export default Aboutus;
