import React from "react";
import ProfilePicture from "./ProfilePicture";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { TiDeleteOutline } from "react-icons/ti";
import BG from "../assets/Capture.PNG";
const ExpertCard = ({ info }) => {
  return (
    <div className="card">
      <img src={BG} className="BG" alt="" />
      <ProfilePicture />
      <span className="Name">{info.userName}</span>
      <span className="infoText">{info.info.age} years old</span>
      <span className="infoText">
        {info.info.years_of_experience} years of experience
      </span>
      <div className="infoText">{info.info.Quote}</div>
      <div className="buttons">
        <TiDeleteOutline className="reject" />
        <AiOutlineCheckCircle className="accept" />
      </div>
    </div>
  );
};

export default ExpertCard;
