const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  user_type: {
    type: Number,
    require: true,
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
  info: {
    years_of_experience: { type: Number, default: 0 },
    phone_price: { type: Number, require: true },
    voice_price: { type: Number, require: true },
    rating: { type: Number, default: 0, max: 5 },
    age: { type: Number, min: 18, require: true },
  },
  chat: [
    {
      id: { type: String, require: true, min: 6 },
      user_id: { type: String, require: true, min: 6 },
      expert_id: { type: String, require: true, min: 6 },
      last_message_date: { type: Date, default: Date.now },
    },
  ],
  call_history: [
    {
      id: { type: String, require: true, min: 6 },
      user_id: { type: String, require: true, min: 6 },
      expert_id: { type: String, require: true, min: 6 },
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
      id: { type: String, require: true, min: 6 },
      user_id: { type: String, require: true, min: 6 },
      expert_id: { type: String, require: true, min: 6 },
      date: { type: Date, default: Date.now },
    },
  ],
});

module.exports = mongoose.model("User", userSchema);
