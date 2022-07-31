import React from "react";
import { GiPointyHat } from "react-icons/gi";
import NavbarSection from "./NavbarSection";

import SectionContainer from "./SectionContainer";

const NavBar = () => {
  return (
    <div className="NavBarContainer">
      <div className="dummy"></div>
      <div className="title">
        Fortunus Vision <GiPointyHat className="icon1" />
      </div>
      <NavbarSection />
    </div>
  );
};

export default NavBar;
