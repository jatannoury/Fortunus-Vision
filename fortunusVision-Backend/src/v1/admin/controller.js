const User = require("../../../models/User");
const { fetchUsers, deleteUsers } = require("./services");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const TOKEN_SECRET = process.env.TOKEN_SECRET || "";

async function getAllUsers(req, res) {
  try {
    const response = await fetchUsers();
    return res.send(response);
  } catch (err) {
    return res.status(500).send(err);
  }
}

async function deleteUser(req, res) {
  try {
    await deleteUsers(req.body.Id);
    return res.status(200).send({ message: "Success" });
  } catch (err) {
    return res.status(500).send(err);
  }
}

module.exports = { getAllUsers, deleteUser };
