const genericRepository = require("../../libraries/utils/genericRepository");
const About = require("./schema");

module.exports = {
  ...genericRepository(About),
};
