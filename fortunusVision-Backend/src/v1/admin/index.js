const { Router } = require("express");
const { getAllUsers } = require("./controller");
const Adminrouter = Router();
// const testMiddleware = require("../../middleware/test");

Adminrouter.post("/getAllUsers", getAllUsers);

module.exports = Adminrouter;
