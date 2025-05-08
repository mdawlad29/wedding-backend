const { Schema, model } = require("mongoose");

const gallerySchema = new Schema(
  {
    images: { type: Array, required: false, default: [] },
  },
  { timestamps: true }
);

const Gallery = model("Gallery", gallerySchema);
module.exports = Gallery;
