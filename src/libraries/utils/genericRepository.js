const paginator = require("./paginator");

const genericRepository = (model) => ({
  create: async (payload) => {
    return await model.create(payload);
  },

  findAll: async (query = {}) => {
    const page = parseInt(query.page) || 1;
    const limit = parseInt(query.limit) || 10;

    const filter = {};
    const sort = { createdAt: -1 };

    return await paginator(model, { page, limit, filter, sort });
  },

  findById: async (id) => {
    return await model.findById(id);
  },

  update: async (id, payload) => {
    return await model.findByIdAndUpdate(id, payload, { new: true });
  },

  remove: async (id) => {
    return await model.findByIdAndDelete(id);
  },
});

module.exports = genericRepository;
