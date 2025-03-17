import React from "react";
import "./CustomArtwork.css";
import arrow from "../../assets/arrow-right-line.png";
import galleryDisplay from "../../assets/Rectangle 5.png";
import handcraftOne from "../../assets/handcraft-1.png";
import handcraftTwo from "../../assets/handcraft-2.png";
import handcraftThree from "../../assets/handcraft-3.png";

const CustomArtwork = () => {
  return (
    <div className="custom-container">
      <div className="custom-header">
        <span>Own a Masterpiece Today</span>
        <div>
          Looking for something custom? Let’s bring your vision to life
          <div>
            <div>Commission a Custom Artwork </div>
            <img src={arrow} />
          </div>
        </div>
      </div>

      <div className="gallery">
        <div>
          <img src={galleryDisplay} alt="Gallery display art"/>
        </div>

        <div>
        <div className="handcraft">
            <img src={handcraftOne} alt="" />
            <span>Handcrafted by visionary artists</span>
          </div>

          <div className="handcraft">
            <img src={handcraftTwo} alt="" />
            <span>High-quality canvas & premium prints</span>
          </div>
          
          <div className="handcraft">
            <img src={handcraftThree} alt="" />
            <span>Worldwide shipping available</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomArtwork;
