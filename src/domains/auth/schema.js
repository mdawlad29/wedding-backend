const { Schema, model } = require("mongoose");
const bcrypt = require("bcryptjs");

const authSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      lowercase: true,
      validate: function (v) {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
      },
    },
    password: {
      type: String,
      required: true,
      minLength: [6, "The length of username can be minimum 6 characters"],
      set: (v) => bcrypt.hashSync(v, bcrypt.genSaltSync(10)),
    },
  },
  { timestamps: true }
);

const Auth = model("Auth", authSchema);
module.exports = Auth;
