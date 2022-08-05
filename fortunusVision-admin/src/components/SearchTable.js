import React, { useState } from "react";
import NavBar from "../components/NavBar";
import { AiOutlineUser, AiFillDelete } from "react-icons/ai";
import { ImUserTie } from "react-icons/im";
import { RiAdminFill } from "react-icons/ri";

const SearchTable = ({ data }) => {
  return (
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
        {data.length !== 0 &&
          data.map((e) => (
            <tr key={e._id}>
              {e.user_type === 0 ? (
                <AiOutlineUser className="iconn" />
              ) : e.user_type === -1 ? (
                <RiAdminFill className="iconn" />
              ) : (
                <ImUserTie className="iconn" />
              )}
              <td>{e.userName}</td>
              <td>{e.email}</td>
              <td>{e.coins}</td>
              <td>
                {e.user_type === 0
                  ? "User"
                  : e.user_type === 1
                  ? "Expert"
                  : "Admin"}
              </td>
              <td>{e.call_history.length}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default SearchTable;
