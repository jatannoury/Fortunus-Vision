const User = require("../../../models/User");
const { addUser, getByEmail } = require("./services");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const TOKEN_SECRET = process.env.TOKEN_SECRET || "";

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
    if (user == null) return res.send({ err: "Invalid credentials" });

    //check validity of password
    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!validPassword) return res.send({ err: "Invalid credentials" });

    //create jwt token
    const token = jwt.sign({ _id: user._id, email: user.email }, TOKEN_SECRET);

    return res.header("auth-token", token).send({
      token: token,
      userName: user.userName,
      coins: user.coins,
      chats: user.chat,
      appointment: user.appointment,
      call_history: user.call_history,
    });
  } catch (error) {
    res.status(500).send(error);
  }
}
module.exports = { register, signIn };
