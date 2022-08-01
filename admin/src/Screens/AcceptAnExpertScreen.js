import React from "react";
import NavBar from "../components/NavBar";
import ProfilePicture from "../components/ProfilePicture";
import "../styling/AcceptExpert.css";
const AcceptAnExpertScreen = () => {
  return (
    <div className="backgroundImage3">
      <NavBar />
      <div className="card">
        <ProfilePicture />
      </div>
    </div>
  );
};

export default AcceptAnExpertScreen;
