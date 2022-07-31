const { use } = require(".");
const User = require("../../../models/User");
const { findById } = require("../../../models/User");

async function fetchUsers() {
  return await User.find();
}

async function deleteUsers(Id) {
  let users = await User.findByIdAndDelete(Id);
}

module.exports = { fetchUsers, deleteUsers };
