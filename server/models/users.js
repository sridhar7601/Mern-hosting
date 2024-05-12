const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required:true },
  username: { type: String, required: true }
});

// Export the model directly
const Usermodel = mongoose.model("users", UserSchema);
module.exports = Usermodel;
