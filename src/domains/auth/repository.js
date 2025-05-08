const Auth = require("./schema");

module.exports = {
  create: async (payload) => {
    return await Auth.create(payload);
  },

  findByEmail: async (email) => {
    return await Auth.findOne({ email });
  },
};
