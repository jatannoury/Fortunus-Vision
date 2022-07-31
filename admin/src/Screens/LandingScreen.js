import React from "react";
import BoxInfo from "../components/BoxInfo";
import "../styling/LandingScreen.css";
const LandingScreen = () => {
  return (
    <div className="backgroundImage">
      <div className="mainContainer">
        <BoxInfo />
      </div>
    </div>
  );
};

export default LandingScreen;
