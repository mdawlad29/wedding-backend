const genericController = require("../../libraries/utils/genericController");
const galleryService = require("./service");

const modelName = "Gallery";

module.exports = {
  ...genericController(galleryService, modelName),
};
