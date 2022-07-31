import React from "react";
import AllBoxes from "../components/AllBoxes";
import BoxInfo from "../components/BoxInfo";
import NavBar from "../components/NavBar";
import "../styling/LandingScreen.css";
import image1 from "../assets/image1.png";
const LandingScreen = () => {
  return (
    <div className="backgroundImage1">
      <NavBar />
      <div className="imageContainer">
        <img src={image1} alt="" className="image" />
      </div>
      <AllBoxes />
    </div>
  );
};

export default LandingScreen;
