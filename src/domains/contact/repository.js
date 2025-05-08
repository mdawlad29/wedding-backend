const genericRepository = require("../../libraries/utils/genericRepository");
const Contact = require("./schema");

module.exports = {
  ...genericRepository(Contact),
};
