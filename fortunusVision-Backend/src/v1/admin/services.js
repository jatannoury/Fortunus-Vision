const { use } = require(".");
const User = require("../../../models/User");
const { findById } = require("../../../models/User");

async function fetchUsers() {
  console.log("INNNNNNN2");
  return await User.find();
}

module.exports = { fetchUsers };
