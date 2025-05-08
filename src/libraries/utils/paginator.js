const paginator = async (model, options = {}) => {
  const { limit = 10, page = 1, filter = {}, sort = { createdAt: -1 } } = options;

  const skip = (page - 1) * limit;
  const total = await model.countDocuments(filter);
  const pages = Math.ceil(total / limit);
  const result = await model.find(filter).sort(sort).skip(skip).limit(limit);

  return { result, pages, total, page, limit };
};

module.exports = paginator;
