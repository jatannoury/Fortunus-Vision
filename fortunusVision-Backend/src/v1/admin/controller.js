const User = require("../../../models/User");
const {
  fetchUsers,
  deleteUsers,
  searchUsers,
  rejectRequest,
} = require("./services");
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

async function searchUser(req, res) {
  let user = await searchUsers(req.body.data);
  return res.send(user);
}

async function getRequests(req, res) {
  try {
    let users = await fetchUsers();
    let result = [];
    users.map((item) => {
      if (item?.expert_request === 1) result.push(item);
    });
    return res.status(200).send(result);
  } catch (err) {
    return res.status(500).send(err);
  }
}

async function manipulateRequest(req, res) {
  if (req.body.state === 0) {
    await User.findByIdAndUpdate(req.body.info._id, {
      expert_request: 0,
      info: {},
    }).then(() => {
      return res.send({ message: "Request Not Accepted" });
    });
  } else {
    await User.findByIdAndUpdate(req.body.info._id, {
      expert_request: 0,
      user_type: 1,
      chat: [],
      rating: { rating: 5, NbofVotes: 1 },
    }).then(() => {
      return res.send({ message: "Request Accepted" });
    });
  }
}

module.exports = {
  getAllUsers,
  deleteUser,
  searchUser,
  getRequests,
  manipulateRequest,
};
