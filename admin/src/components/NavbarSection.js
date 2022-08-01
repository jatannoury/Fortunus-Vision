import React from "react";
import {
  AiOutlineUser,
  AiOutlineUserAdd,
  AiOutlineSearch,
  AiOutlineHome,
  AiOutlineLogout,
} from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import SectionContainer from "./SectionContainer";
const NavbarSection = () => {
  const navigate = useNavigate();
  return (
    <div className="sections ">
      <SectionContainer label="Home">
        <AiOutlineHome
          className="icon2 dropdown"
          onClick={() => navigate("/LandingScreen")}
        />
      </SectionContainer>
      <SectionContainer label="Search">
        <AiOutlineSearch
          className="icon2 dropdown"
          onClick={() => navigate("/SearchUsers")}
        />
      </SectionContainer>

      <SectionContainer label="See All Users">
        <AiOutlineUser
          className=" icon2 dropdown"
          onClick={() => navigate("/AllUsers")}
        />
      </SectionContainer>

      <SectionContainer label="Accept An Expert">
        <AiOutlineUserAdd
          className=" icon2 dropdown"
          onClick={() => navigate("/AcceptExperts")}
        />
      </SectionContainer>
      <SectionContainer label="Logout">
        <AiOutlineLogout
          className=" icon2 dropdown"
          onClick={() => navigate("/")}
        />
      </SectionContainer>
    </div>
  );
};

export default NavbarSection;
