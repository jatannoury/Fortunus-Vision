import React from "react";
import image1 from "../assets/image1.png";
import { FaCoins } from "react-icons/fa";
const CoinsContainer = () => {
  return (
    <div className="imageContainer">
      <span class="coins">
        200 <FaCoins />
      </span>
      <img src={image1} alt="" className="image" />
    </div>
  );
};

export default CoinsContainer;
