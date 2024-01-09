const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const UserSchema = new Schema({
  mail: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  
});

const UserModel = model("RegisteredUser2", UserSchema);

module.exports = UserModel;