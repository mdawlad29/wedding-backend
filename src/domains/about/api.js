const { statusCodes, responseMessages } = require("../../constants");
const genericController = require("../../libraries/utils/genericController");
const aboutService = require("./service");

const modelName = "About";

module.exports = {
  ...genericController(aboutService, modelName),
};
