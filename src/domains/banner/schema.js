const { Schema, model } = require("mongoose");

const bannerSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    banner_images: { type: Array, required: false, default: [] },
  },
  { timestamps: true }
);

const Banner = model("Banner", bannerSchema);
module.exports = Banner;
