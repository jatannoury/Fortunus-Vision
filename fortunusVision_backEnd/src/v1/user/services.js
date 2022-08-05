const { use } = require(".");
const User = require("../../../models/User");
const { findById } = require("../../../models/User");

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
async function getByUserType(userType) {
  return await User.find({ user_type: userType });
}

async function getUserById(Id) {
  return await User.findById(Id);
}
async function addChatExpert(body, user) {
  const { expert_id, user_id, price, expert_name, id } = body;
  for (let i = 0; i < user.chat.length; i++) {
    if (user.chat[i].expert_id === expert_id) return;
  }
  user.chat.push({
    expert_id: expert_id,
    user_id: user_id,
    price: price,
    name: expert_name,
    id: id,
  }),
    await user.save();
}
async function addChatUser(body, user) {
  const { expert_id, user_id, price, user_name, id } = body;
  for (let i = 0; i < user.chat.length; i++) {
    if (user.chat[i].user_id === user_id) return;
  }
  user.chat.push({
    expert_id: expert_id,
    user_id: user_id,
    price: price,
    name: user_name,
    id: id,
  }),
    await user.save();
}

async function ServiceaddAppointment(body, user) {
  const { day, time } = body;
  user.availableAppointments.push({
    day: day,
    time: time,
  });
  user.availableAppointments.time = time;
  await user.save();
}

async function getAppointments(Id) {
  const expert = await User.findById(Id);
  return expert.availableAppointments;
}

module.exports = {
  addUser,
  getByEmail,
  getByUserType,
  getUserById,
  addChatExpert,
  addChatUser,
  ServiceaddAppointment,
  getAppointments,
};
