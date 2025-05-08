const genericService = require("../../libraries/utils/genericService");
const sendMail = require("../../middlewares/sendMail");
const contactRepository = require("./repository");

module.exports = {
  ...genericService(contactRepository),
};
