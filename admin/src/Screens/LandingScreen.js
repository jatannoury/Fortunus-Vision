import React from "react";
import AllBoxes from "../components/AllBoxes";
import BoxInfo from "../components/BoxInfo";
import CoinsContainer from "../components/CoinsContainer";
import NavBar from "../components/NavBar";
import "../styling/LandingScreen.css";
const LandingScreen = () => {
  return (
    <div className="backgroundImage1">
      <NavBar />
      <CoinsContainer />
      <AllBoxes />
    </div>
  );
};

export default LandingScreen;
