const { Router } = require("express");
const {
  signIn,
  addChat,
  register,
  getExperts,
  addAppointment,
  setAppointment,
  getAvailability,
} = require("./controller");
const router = Router();
// const testMiddleware = require("../../middleware/test");

router.post("/register", register);
router.post("/signIn", signIn);
router.post("/getExperts", getExperts);
router.post("/addChat", addChat);
router.post("/addAppointment", addAppointment);
router.post("/setAppointment", setAppointment);
router.get("/getAvailability", getAvailability);

module.exports = router;
