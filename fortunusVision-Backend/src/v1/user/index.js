const { Router } = require("express");
const {
  signIn,
  addChat,
  register,
  getExperts,
  updateCoins,
  addAppointment,
  setAppointment,
  getAvailability,
  updateAppointment,
} = require("./controller");
const router = Router();
// const testMiddleware = require("../../middleware/test");

router.post("/register", register);
router.post("/signIn", signIn);
router.post("/getExperts", getExperts);
router.post("/addChat", addChat);
router.post("/addAppointment", addAppointment);
router.post("/setAppointment", setAppointment);
router.post("/updateAppointment", updateAppointment);
router.post("/updateCoins", updateCoins);
router.get("/getAvailability", getAvailability);

module.exports = router;
