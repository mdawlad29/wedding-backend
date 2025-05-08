const genericRepository = require("../../libraries/utils/genericRepository");
const Gallery = require("./schema");

module.exports = {
  ...genericRepository(Gallery),
};
