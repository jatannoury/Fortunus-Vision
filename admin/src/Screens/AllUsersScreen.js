import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import "../styling/AllUsersScreen.css";
import { AiOutlineUser } from "react-icons/ai";
import AllUsersTable from "../components/AllUsersTable";
import { getAllUsers } from "../helper/http";
const AllUsersScreen = () => {
  const [info, setInfo] = useState([]);
  useEffect(() => {
    async function fetchUsers() {
      let res = await getAllUsers();
      res && setInfo([res]);
    }
    fetchUsers();
  }, []);
  return (
    <div className="backgroundImage2">
      <NavBar />
      <div className="Apptitle AllUsers">Find below all users</div>
      <AllUsersTable info={info} />
    </div>
  );
};

export default AllUsersScreen;
