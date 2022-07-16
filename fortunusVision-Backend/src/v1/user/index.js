const { Router } = require("express");
const { register, signIn } = require("./controller");
const router = Router();
// const testMiddleware = require("../../middleware/test");

router.post("/register", register);
router.post("/signIn", signIn);
module.exports = router;
