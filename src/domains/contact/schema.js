const { Schema, model } = require("mongoose");

const contactSchema = new Schema(
  {
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    email: {
      type: String,
      required: true,
      lowercase: true,
    },
    subject: { type: String, required: true },
    message: { type: String, required: true },
  },
  { timestamps: true }
);

const Contact = model("Contact", contactSchema);
module.exports = Contact;
