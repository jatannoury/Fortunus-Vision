import React from "react";
import ProfilePicture from "./ProfilePicture";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { TiDeleteOutline } from "react-icons/ti";
import { BsFillTelephoneFill, BsFillMicFill } from "react-icons/bs";
import BG from "../assets/Capture.PNG";
import { manipulateRequest } from "../helper/http";

const ExpertCard = ({ info, requests }) => {
  return (
    <div className="card">
      <img src={BG} className="BG" alt="" />
      <ProfilePicture />
      <span className="Name">{info.userName}</span>
      <span className="infoText">{info.info.age} years old</span>
      <span className="infoText">
        {info.info.years_of_experience} years of experience
      </span>
      <div className="infoText">
        <BsFillTelephoneFill className="icons" /> {info.info.phone_price} coins
      </div>
      <div className="infoText">
        <BsFillMicFill className="icons" />
        {info.info.voice_price} coins
      </div>
      <div className="infoText">{info.info.Quote} </div>
      <div className="buttons">
        <TiDeleteOutline
          className="reject"
          onClick={(e) => {
            manipulateRequest(info, 0);
            requests.pop(requests.indexOf(info));
          }}
        />
        <AiOutlineCheckCircle
          className="accept"
          onClick={(e) => {
            manipulateRequest(info, 1);
            requests.pop(requests.indexOf(info));
          }}
        />
      </div>
    </div>
  );
};

export default ExpertCard;
