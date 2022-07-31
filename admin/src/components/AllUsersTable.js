import React, { useEffect, useState } from "react";
import { AiOutlineUser, AiFillDelete } from "react-icons/ai";
import { ImUserTie } from "react-icons/im";
import { RiAdminFill } from "react-icons/ri";
import { deleteUser, getAllUsers } from "../helper/http";

const AllUsersTable = () => {
  const [info, setInfo] = useState([]);
  useEffect(() => {
    async function fetchUsers() {
      let res = await getAllUsers();
      res && setInfo([res]);
    }
    fetchUsers();
  }, [info]);
  async function deleteSelectedUser(Id) {
    setInfo([info[0].filter((e) => e._id !== Id)]);
    console.log(info[0].length);
    deleteUser(Id);
  }
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
              <th className="del" onClick={() => deleteSelectedUser(e._id)}>
                Delete
              </th>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default AllUsersTable;
