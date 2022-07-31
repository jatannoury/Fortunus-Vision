import React from "react";
import { GiPointyHat } from "react-icons/gi";
const NavBar = () => {
  return (
    <div className="NavBarContainer">
      <div className="title">
        Fortunus Vision <GiPointyHat className="icon1" />
      </div>

      <div className="sections"></div>
    </div>
  );
};

export default NavBar;
