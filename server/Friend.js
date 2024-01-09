const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const UserSchema = new Schema({
  mail2: { type: String, required: true },
  mail: { type: String, required: true },
  owe: { type: Number, required: true },
});

const Friend = model("expense2", UserSchema);

module.exports = Friend;