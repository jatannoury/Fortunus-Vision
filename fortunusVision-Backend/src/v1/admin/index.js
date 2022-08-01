const { Router } = require("express");
const {
  getAllUsers,
  deleteUser,
  searchUser,
  getRequests,
  manipulateRequest,
} = require("./controller");
const AdminRouter = Router();
// const testMiddleware = require("../../middleware/test");

AdminRouter.post("/getAllUsers", getAllUsers);
AdminRouter.post("/deleteUser", deleteUser);
AdminRouter.post("/searchUser", searchUser);
AdminRouter.post("/getRequests", getRequests);
AdminRouter.post("/manipulateRequest", manipulateRequest);

module.exports = AdminRouter;
