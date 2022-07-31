import React, { useState } from "react";
import NavBar from "../components/NavBar";
import "../styling/AllUsersScreen.css";
import { AiOutlineUser } from "react-icons/ai";
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
      <table className="table">
        <thead>
          <tr>
            <th></th>
            <th>Full Name</th>
            <th>Email</th>
            <th>Coins</th>
            <th>User Type</th>
            <th>Count of completed calls</th>
          </tr>
        </thead>
        <tbody>
          {info &&
            info.map((e) => (
              <tr>
                <AiOutlineUser className="iconn" />
                <td>{e.fullName}</td>
                <td>{e.phoneNb}</td>
                <td>{e.email}</td>
                <td>{e.rlsStatus}</td>
                <td>{[e.lat, "° , ", e.long, "°"]}</td>
                <th
                  className="del"
                  //   onClick={(e) => {
                  //       delContact(e.target.parentElement.children[2].innerText);
                  //   }}
                >
                  Delete
                </th>
                <th
                  className="add edit"
                  //   onClick={(e) => {
                  //     localStorage.setItem(
                  //       "contact_nb",
                  //       e.target.parentElement.children[2].innerText
                  //     );
                  //     window.location.href = "/edit";
                  //   }}
                >
                  Edit
                </th>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllUsersScreen;
