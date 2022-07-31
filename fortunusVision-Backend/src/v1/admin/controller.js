const User = require("../../../models/User");
const { fetchUsers } = require("./services");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const TOKEN_SECRET = process.env.TOKEN_SECRET || "";

async function getAllUsers(req, res) {
  console.log("INNNN");

  try {
    const response = await fetchUsers();
    console.log(response);
    return res.send(response);
  } catch (err) {
    return res.status(500).send(err);
  }
}

module.exports = { getAllUsers };
