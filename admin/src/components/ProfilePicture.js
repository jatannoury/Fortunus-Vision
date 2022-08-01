import React from "react";
import "../styling/ProfilePicture.css";
const ProfilePicture = () => {
  let source = require("../assets/PERSONAL_PROFILE_PIC.jpg");
  return (
    <div className="imgContainer">
      <img src={source} alt="" className="profileImage" />
    </div>
  );
};

export default ProfilePicture;
