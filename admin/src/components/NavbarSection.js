import React from "react";
import {
  AiOutlineUser,
  AiOutlineUserAdd,
  AiOutlineSearch,
} from "react-icons/ai";
import SectionContainer from "./SectionContainer";
const NavbarSection = () => {
  return (
    <div className="sections ">
      <SectionContainer label="Search">
        <AiOutlineSearch className="icon2 dropdown" />
      </SectionContainer>

      <SectionContainer label="See All Users">
        <AiOutlineUser className=" icon2 dropdown" />
      </SectionContainer>

      <SectionContainer label="Accept An Expert">
        <AiOutlineUserAdd className=" icon2 dropdown" />
      </SectionContainer>
    </div>
  );
};

export default NavbarSection;
