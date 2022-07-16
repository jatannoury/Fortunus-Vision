const User = require("../../../models/User");
const { addUser } = require("./services");
const bcrypt = require("bcryptjs");

async function register(req, res) {
  try {
    //encrypting password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    //adding inputs to mongodb
    const addUserResult = await addUser(req.body, hashedPassword);
    return res.send({ user: addUserResult._id });
  } catch (error) {
    return res.send(error);
  }
}
module.exports = { register };
