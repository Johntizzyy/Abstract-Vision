import React from "react";
import "./Home.css";
import art from "../../assets/home-art.png";
import logo from "../../assets/Vector.png";
import phone from "../../assets/phone.png";
import cart from "../../assets/shopping-bag-fill.png";
import arrowRight from "../../assets/arrow-right-line.png";


const Home = () => {
  return (
    <div className="home-contaner">
      <div className="bg">
        <img src={art} className="" />{" "}
      </div>

      <div className="nav">
        <nav>
          <span className="logo">
            <img src={logo} />
            ABSTRACT VISION
          </span>
          <ul className="art-links">
            <li>GALLERY</li>
            <li>SHOP</li>
            <li>CUSTOM ARTWORK</li>
          </ul>

          <ul className="nav-links">
            <li>ABOUT US</li>
            <li><img src={phone}/>08149026505</li>
            <li><img src={cart}/></li>
          </ul>
        </nav>
      </div>

      <div className="hero-section">
        <div>Where Art Meets Emotion</div>

        <span>
          Elevate your walls with expressive, thought-provoking, and
          one-of-a-kind abstract art. Each piece tells a story, blending colors,
          textures, and emotions to create something truly mesmerizing.

          <button className="shop-now">
            Shop now
            <img src={arrowRight}/>
          </button>
        </span>
      </div>
    </div>
  );
};

export default Home;
