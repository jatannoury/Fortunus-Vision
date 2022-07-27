const { Router } = require("express");
const {
  signIn,
  addChat,
  register,
  getExperts,
  addHistory,
  getHistory,
  updateCoins,
  triggerCall,
  switchUserType,
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
router.post("/switchUserType", switchUserType);
router.post("/triggerCall", triggerCall);
router.get("/getAvailability", getAvailability);
router.post("/addHistory", addHistory);
router.get("/getHistory", getHistory);

module.exports = router;
