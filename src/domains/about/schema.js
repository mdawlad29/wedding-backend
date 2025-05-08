const { Schema, model } = require("mongoose");

const aboutSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    about_image: { type: String, required: true, default: null },
  },
  { timestamps: true }
);

const About = model("About", aboutSchema);
module.exports = About;
