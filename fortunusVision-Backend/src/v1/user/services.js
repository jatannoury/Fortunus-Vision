const { use } = require(".");
const User = require("../../../models/User");
const {} = require("../../../models/User");

async function addUser(body, hashedPassword) {
  //get from body name and email variables
  const { userName, email } = body;
  //create new user schema
  const user = new User({
    userName,
    email,
    password: hashedPassword,
  });
  //save new schema
  return await user.save();
}

async function getByEmail(email) {
  //return first user having matching synonym
  return await User.findOne({
    email,
  });
}
module.exports = { addUser, getByEmail };
