const genericRepository = require("../../libraries/utils/genericRepository");
const Banner = require("./schema");

module.exports = {
  ...genericRepository(Banner),
};
