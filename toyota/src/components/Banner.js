import React from "react";
import "./Banner.css";
import bannerImage from "../assets/banner.jpg"; // Replace with your actual banner image

const Banner = () => {
  return (
    <div className="banner">
      <img src={bannerImage} alt="Toyota U Trust Banner" />
      <h1>Toyota U Trust</h1>
      <button className="inventory-btn">CLICK HERE TO SEE USED CAR INVENTORY</button>
    </div>
  );
};

export default Banner;
