const path = require("path");
const fs = require("fs");

const findById = async (req, res, next) => {
  try {
    const filename = req.params.filename;
    const imagePath = path.join(__dirname, "../../../public/upload", filename);

    if (!fs.existsSync(imagePath)) {
      return res.status(404).json({
        status: 404,
        message: "Image not found",
      });
    }

    return res.sendFile(imagePath);
  } catch (error) {
    next(error);
  }
};

module.exports = { findById };
