const { Router } = require("express");
const { register, signIn, getExperts } = require("./controller");
const router = Router();
// const testMiddleware = require("../../middleware/test");

router.post("/register", register);
router.post("/signIn", signIn);
router.post("/getExperts", getExperts);
module.exports = router;
