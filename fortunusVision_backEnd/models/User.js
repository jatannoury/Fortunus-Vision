const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  user_type: {
    type: Number,
    require: true,
    default: 0,
    max: 1,
  },
  userName: {
    type: String,
    require: true,
    min: 6,
    max: 255,
  },
  email: {
    type: String,
    require: true,
    min: 6,
    max: 255,
    unique: true,
  },
  password: {
    type: String,
    require: true,
    min: 6,
    max: 1024,
  },
  coins: {
    type: Number,
    default: 0,
  },
  incomingCall: {
    state: { type: Number, require: true },
    userName: { type: String, require: true },
  },
  info: {
    years_of_experience: { type: Number, require: true },
    phone_price: { type: Number, require: true },
    voice_price: { type: Number, require: true },
    rating: {
      rating: { type: Number, require: true },
      NbofVotes: { type: Number, require: true },
    },
    age: { type: Number, min: 18, require: true },
    Quote: { type: String, require: true },
  },
  chat: [
    {
      id: { type: String, require: true, min: 6 },
      user_id: { type: String, require: true, min: 6 },
      expert_id: { type: String, require: true, min: 6 },
      last_message_date: { type: Date, default: Date.now },
      price: { type: Number, require: true },
      name: { type: String, require: true },
    },
  ],
  call_history: [
    {
      name: { type: String, require: true },
      price: { type: Number, require: true },
    },
  ],
  voice: [
    {
      id: { type: String, require: true, min: 6 },
      chat_id: { type: String, require: true, min: 6 },
      date: { type: Date, default: Date.now },
    },
  ],
  appointment: [
    {
      user_id: { type: String, require: true, min: 6 },
      expert_id: { type: String, require: true, min: 6 },
      date: {
        day: { type: String, require: true },
        time: { type: String, require: true },
      },
    },
  ],
  availableAppointments: [
    {
      day: { type: String, require: true },
      time: { type: Array, require: true },
    },
  ],
  expert_request: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model("User", userSchema);
