import React, { useState } from "react";
import NavBar from "../components/NavBar";
import "../styling/AllUsersScreen.css";
import { AiOutlineUser } from "react-icons/ai";
import AllUsersTable from "../components/AllUsersTable";
const AllUsersScreen = () => {
  const [info, setInfo] = useState([
    {
      fullName: "JOSEPH",
      phoneNb: "70471877",
      email: "Josephtannoury@outlook.com",
      rlsStatus: "Married",
      lat: 35.21,
      long: 52.21,
    },
  ]);
  return (
    <div className="backgroundImage2">
      <NavBar />
      <div className="Apptitle AllUsers">Find below all users</div>
      <AllUsersTable info={info} />
    </div>
  );
};

export default AllUsersScreen;
