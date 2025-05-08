const genericService = (repository) => ({
  create: async (req) => {
    return await repository.create(req.body);
  },

  findAll: async (req) => {
    const paginated = await repository.findAll(req.query);
    return {
      data: paginated.result,
      meta: {
        page: paginated.page,
        limit: paginated.limit,
        total: paginated.total,
        pages: paginated.pages,
      },
    };
  },
  findById: async (id) => {
    return await repository.findById(id);
  },

  update: async (req) => {
    const id = req.params.id;
    return await repository.update(id, req.body);
  },

  remove: async (req) => {
    return await repository.remove(req.params.id);
  },
});

module.exports = genericService;
