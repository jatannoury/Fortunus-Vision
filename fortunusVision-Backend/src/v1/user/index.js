const { Router } = require("express");
const {
  register,
  signIn,
  getExperts,
  addChat,
  addAppointment,
  getAvailability,
} = require("./controller");
const router = Router();
// const testMiddleware = require("../../middleware/test");

router.post("/register", register);
router.post("/signIn", signIn);
router.post("/getExperts", getExperts);
router.post("/addChat", addChat);
router.post("/addAppointment", addAppointment);
router.get("/getAvailability", getAvailability);
module.exports = router;
