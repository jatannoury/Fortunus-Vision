import React from "react";
import AllBoxes from "../components/AllBoxes";
import BoxInfo from "../components/BoxInfo";
import NavBar from "../components/NavBar";
import "../styling/LandingScreen.css";
const LandingScreen = () => {
  return (
    <div className="backgroundImage">
      <NavBar />
      <AllBoxes />
    </div>
  );
};

export default LandingScreen;
