import React, { useEffect, useState } from "react";
import { fetchData } from "../helper/http";
import BoxInfo from "./BoxInfo";

const AllBoxes = ({ users, experts }) => {
  return (
    <div className="mainContainer">
      <div className="flex">
        <BoxInfo number={users + experts} />
        <span className="info">Total number of customers</span>
      </div>
      <div className="flex">
        <BoxInfo number={users} />
        <span className="info">Total number of users</span>
      </div>
      <div className="flex">
        <BoxInfo number={experts} />
        <span className="info">Total number of experts</span>
      </div>
    </div>
  );
};

export default AllBoxes;
