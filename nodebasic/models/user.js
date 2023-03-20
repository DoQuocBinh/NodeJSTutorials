const mongoose = require("mongoose")

const Schema = mongoose.Schema

const UserSchema = new Schema({
    school: String,
    country: String,
  });

  module.exports = mongoose.model("UserModel", UserSchema);

