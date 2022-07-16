const User = require("../../../models/User");
const { addUser, getByEmail } = require("./services");
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
async function signIn(req, res) {
  try {
    //check validity of email
    const user = await getByEmail(req.body.email);
    if (!user) return res.status(400).send("invalid credentials");

    //check validity of password
    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!validPassword) return res.status(400).send("invalid credentials");

    //create jwt token
    const token = jwt.sign({ _id: user._id, email: user.email }, TOKEN_SECRET);

    return res.header("auth-token", token).send({ token });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
}
module.exports = { register, signIn };
