const { use } = require(".");
const User = require("../../../models/User");
const { findById } = require("../../../models/User");

async function fetchUsers(Id) {
  if (Id) {
    return await User.findById(Id);
  }
  return await User.find();
}

async function deleteUsers(Id) {
  let users = await User.findByIdAndDelete(Id);
}

async function searchUsers(data) {
  let result = [];
  if (data !== "") {
    let users = await fetchUsers();
    for (let i = 0; i < users.length; i++) {
      if (
        users[i].userName.startsWith(data) ||
        users[i].email.startsWith(data)
      ) {
        result.push(users[i]);
      }
    }
    return result;
  }
}

module.exports = { fetchUsers, deleteUsers, searchUsers };
