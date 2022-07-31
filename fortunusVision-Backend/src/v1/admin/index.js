const { Router } = require("express");
const { getAllUsers, deleteUser } = require("./controller");
const AdminRouter = Router();
// const testMiddleware = require("../../middleware/test");

AdminRouter.post("/getAllUsers", getAllUsers);
AdminRouter.post("/deleteUser", deleteUser);

module.exports = AdminRouter;
