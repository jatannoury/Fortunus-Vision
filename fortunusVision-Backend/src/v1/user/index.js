const { Router } = require("express");
const { register } = require("./controller");
const router = Router();
// const testMiddleware = require("../../middleware/test");

router.post("/register", register);

module.exports = router;
