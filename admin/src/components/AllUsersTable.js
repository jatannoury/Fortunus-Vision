import React from "react";
import { AiOutlineUser, AiFillDelete } from "react-icons/ai";
import { ImUserTie } from "react-icons/im";
import { RiAdminFill } from "react-icons/ri";

const AllUsersTable = ({ info }) => {
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
        {info.length !== 0 &&
          info[0].map((e) => (
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
  );
};

export default AllUsersTable;
