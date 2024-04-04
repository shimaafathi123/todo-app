const mongoose = require("mongoose");
const bcrypt = require("bcrypt")

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ["admin", "user"], default: "user" },
});

userSchema.pre("save", async function (next) {
    const user = this
    const salt = await bcrypt.genSalt(10)
    const user.password = await bcrypt.hash(user.password,salt)
    next()
});

userSchema.methods.comparePassword = async function(candidatePassword){
    return bcrypt.compare(candidatePassword,this.password)
}

const User = mongoose.model("User", userSchema);
module.exports = User;
