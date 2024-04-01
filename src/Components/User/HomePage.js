import React from "react";
import "../User/HomePage.css";
import homeimg1 from "../../Images/HomePage2.jpg";
import homeimg2 from "../../Images/HomePage3.jpg";
import { IoIosCall} from 'react-icons/io';
import {AiOutlineMail} from 'react-icons/ai'
import homeimg3 from '../../Images/HomePage4.jpg'
function HomePage() {
  return (
    <div>

 
      <div className="Home-Page" id="homepage_img">
        <p>Welcome To EL DemeteR </p>
        <p id="home-head1">Delicious Food & Wonderful</p>
        <p id="home-head2"> Eating Experience</p>
      </div>


      <div className="Home-Page2">
        <h5>REFRESH YOUR TASTE BUDS</h5>
        <p>Enjoy An Exceptional</p>
        <p>Journey of Taste</p>
        <img src={homeimg1} />
        <form>
          <h6>
            We see our customers as invited guests to a party, and we are the
          </h6>
          <h6 id="home-para1">
            hosts. It’s our job every day to make every important aspect of the
          </h6>
          <h6 id="home-para2"> customer experience a little bit better.</h6>
        </form>
      </div>


      <div className="Home-Page3">
        <div className="home-img2">
          <img src={homeimg2} />
          <p>QUALITY & BALANCE</p>
        </div>
        <div className="home-img3">
          <p>OUR FOOD PHILOSOPHY</p>
          <form>
          <h6>
            Simple and balanced.Food is not rational. Food is culture,
            tradition, and emotion.Cooking is all about people. Food is maybe
            the only universal thing that really has the power to bring everyone
            together. No matter what culture, everywhere around the world,
            people get together to eat.
          </h6>
          </form>
        </div>
      </div>


      <div className="HomePage-4">
        <form>
          <h4>FRESH TASTE BUDS</h4>
          <h1>STARTERS</h1>
          <h6 id="home-starter1">Hot & Sour Soup <hr/> 150</h6>
          <h6 id="home-starter2">chicken tikka<hr/>600</h6>
          <h6 id="home-starter3">Baked spring rolls<hr/>300</h6>
          <h6 id="home-starter4">Ginger chicken meatballs<hr/>400</h6>
        </form>

        <form id="home-maindishes">
          <h4>TOP RATED DISHES</h4>
          <h1>MAIN DISHES</h1>
          <h6 id="home-main1">Champagne Chicken<hr/>350</h6>
          <h6 id="home-main2">Sheet Pan Salmon and Veggies<hr/>600</h6>
          <h6 id="home-main3">Broccoli Cheddar Mac and Cheese<hr/>400</h6>
          <h6 id="home-main4">Chicken Florentine<hr/>300</h6>
        </form>

        <form id="home-beverages">
          <h4>DRINK & WINES</h4>
          <h1>BEVERAGE</h1>
          <h6 id="home-bev1">Dalgona Coffee<hr/>200</h6>
          <h6 id="home-bev2">Virgin Mojito<hr/>120</h6>
          <h6 id="home-bev3">Blueberry Smoothie<hr/>200</h6>
          <h6 id="home-bev4">Avocado Shake<hr/>220</h6>
        </form>  
      </div>

      <div className="HomePage-5">
        <form id="home-visit">
        <h1>VISIT OUR RESTAURANT</h1>
        <p>We see our customers as invited guests to a party, and we are the hosts.</p>
        <p><IoIosCall style={{fontSize:20,color:'red'}}/>+91 9876543210</p>
        <p><AiOutlineMail style={{fontSize:20 ,color:'red'}}/>eldemeter@gmail.com</p>
        </form>
        <div className="home-img4">
          <img src={homeimg3}/>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
