const { Router } = require("express");
const { getAllUsers, deleteUser, searchUser } = require("./controller");
const AdminRouter = Router();
// const testMiddleware = require("../../middleware/test");

AdminRouter.post("/getAllUsers", getAllUsers);
AdminRouter.post("/deleteUser", deleteUser);
AdminRouter.post("/searchUser", searchUser);

module.exports = AdminRouter;
