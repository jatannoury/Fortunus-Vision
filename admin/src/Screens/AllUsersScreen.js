import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import "../styling/AllUsersScreen.css";
import AllUsersTable from "../components/AllUsersTable";
import { getAllUsers } from "../helper/http";
const AllUsersScreen = () => {
  return (
    <div className="backgroundImage2">
      <NavBar />
      <div className="Apptitle AllUsers">Find below all users</div>
      <AllUsersTable />
    </div>
  );
};

export default AllUsersScreen;
