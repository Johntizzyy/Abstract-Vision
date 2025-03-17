import React from "react";
import "./Featured.css";
import arrow from "../../assets/arrow-right-line.png";
import art from "../../assets/art-1.png";
import artTwo from "../../assets/art-2.png";
import artThree from "../../assets/art-3.png";
import artFour from "../../assets/art-4.png";
import artFive from "../../assets/art-5.png";
import frameOne from "../../assets/Frame-1.png"
import frameTwo from "../../assets/Frame-2.png"
import frameThree from "../../assets/Frame-3.png"

const Featured = () => {
  const artData = [
    {
      name: "Ethereal Chaos",
      price: 450,
      desc: "A captivating dance of deep blues and gold, reflecting the beauty in unpredictability.",
      image: art, //"../../assets/art-1.png"
      width: "387px",
      height: "521px",
    },
    {
      name: "Fragmented Reality",
      price: 620,
      desc: "Soft pastels and fluid movement bring a sense of calm and introspection.",
      image: artTwo,
      width: "387px",
      height: "591px",
    },
    {
      name: "Serenity in Motion",
      price: 390,
      desc: "Soft pastels and fluid movement bring a sense of calm and introspection",
      image: artThree,
      width: "387px",
      height: "478px",
    },
    {
      name: "Unfiltered Expression",
      price: 750,
      desc: "A raw explosion of color and form, embodying pure artistic freedom.",
      image: artFour,
      width: "794px",
      height: "820px",
    },
    {
      name: "Golden Reverie",
      price: 540,
      desc: "Metallic accents and warm tones evoke nostalgia and luxury in one frame.",
      image: artFive,
      width: "387px",
      height: "591px",
    },
  ];
  return (
    <div className="F-container">
      {/* Headr divs */}
      <div className="featured-art-header">
        <div className="featured-art-header-text">
          <div>Featured Artworks</div>
        </div>

        <div className="featured-art-header-explore-link">
          {/* Add arrow image here */}
          <div>Explore Collection </div>
          <img src={arrow} />
        </div>
      </div>

      {/* Artwork Divs */}

      {
        <div className="artworks">
          {artData.map((data) => (
            <div
              className="art"
              key={data.name}
              style={{ width: data.width, height: data.height }}
            >
              <img src={data.image} alt={data.name} />
              <div className="art-title-price">
                <span className="art-name">{data.name}</span>
                <span className="art-price">&#x24;{data.price}</span>
              </div>
              <div className="art-desc">{data.desc}</div>
            </div>
          ))}
        </div>
      }

      <div className="Why">
        <div className="q-header">Why Abstract Art?</div>
        <div className="q-desc">
          Abstract art is more than decoration—it’s an<img src={frameOne}/>  emotion, an idea,
          a conversation starter. <img src={frameTwo}/> Whether you’re drawn to bold contrasts or
          soothing palettes, there’s a piece waiting to resonate with you. <img src={frameThree}/>
        </div>
      </div>
    </div>
  );
};

export default Featured;
