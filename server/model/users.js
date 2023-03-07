const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema({
  name: String,
  age: Number,
  email: String,
});

const users = mongoose.model("users", usersSchema);
module.exports = users;
