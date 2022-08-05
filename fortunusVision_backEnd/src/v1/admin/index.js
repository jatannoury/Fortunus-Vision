const { Router } = require("express");
const {
  getAllUsers,
  deleteUser,
  searchUser,
  getRequests,
  manipulateRequest,
  fetchData,
} = require("./controller");
const AdminRouter = Router();
// const testMiddleware = require("../../middleware/test");

AdminRouter.post("/getAllUsers", getAllUsers);
AdminRouter.post("/deleteUser", deleteUser);
AdminRouter.post("/searchUser", searchUser);
AdminRouter.post("/getRequests", getRequests);
AdminRouter.post("/manipulateRequest", manipulateRequest);
AdminRouter.post("/fetchData", fetchData);

module.exports = AdminRouter;
