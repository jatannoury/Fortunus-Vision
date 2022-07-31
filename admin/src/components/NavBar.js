import React from "react";
import { GiPointyHat } from "react-icons/gi";
import {
  AiOutlineUser,
  AiOutlineUserAdd,
  AiOutlineSearch,
} from "react-icons/ai";

const NavBar = () => {
  return (
    <div className="NavBarContainer">
      <div className="dummy"></div>
      <div className="title">
        Fortunus Vision <GiPointyHat className="icon1" />
      </div>
      <div className="sections ">
        <div class="dropdown">
          <div className="center">
            <AiOutlineSearch className="icon2 dropdown" />
          </div>
          <div class="dropdown-content">
            <p>Search</p>
          </div>
        </div>
        <div class="dropdown">
          <div className="center">
            <AiOutlineUser className=" icon2 dropdown" />
          </div>
          <div class="dropdown-content">
            <p>See All Users </p>
          </div>
        </div>
        <div class="dropdown">
          <div className="center">
            <AiOutlineUserAdd className="icon2 dropdown" />
          </div>
          <div class="dropdown-content">
            <p>Accept An Expert </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
