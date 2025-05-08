const { statusCodes, responseMessages } = require("../../constants");
const genericController = require("../../libraries/utils/genericController");
const bannerService = require("./service");

const modelName = "Banner";

module.exports = {
  ...genericController(bannerService, modelName),
};
