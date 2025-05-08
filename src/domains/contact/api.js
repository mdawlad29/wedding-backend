const genericController = require("../../libraries/utils/genericController");
const contactService = require("./service");

const modelName = "Contact";

module.exports = {
  ...genericController(contactService, modelName),
};
