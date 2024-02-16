const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  createdAt: {
    type:String,
    required: true,
  },
  role: {
    type: String,
    enums: ["user", "admin"],
    default: "user",
  },
});

module.exports = mongoose.model('user', userSchema);
