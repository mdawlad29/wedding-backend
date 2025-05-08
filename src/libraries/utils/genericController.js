const { statusCodes, responseMessages } = require("../../constants");

const genericController = (service, modelName, schema) => ({
  create: async (req, res, next) => {
    try {
      const response = await service.create(req);
      res.sendResponse(statusCodes.CREATED, `${modelName} ${responseMessages.CREATED}`, response);
    } catch (error) {
      next(error);
    }
  },

  findAll: async (req, res, next) => {
    try {
      const { data, meta } = await service.findAll(req);
      res.sendResponse(statusCodes.SUCCESS, `${modelName} ${responseMessages.FETCHED}`, data, meta);
    } catch (error) {
      next(error);
    }
  },

  findById: async (req, res, next) => {
    try {
      const response = await service.findById(req.params.id);

      if (!response) {
        return res.sendResponse(
          statusCodes.NOT_FOUND,
          `${modelName} ${responseMessages.NOT_FOUND}`,
          null
        );
      }

      res.sendResponse(statusCodes.SUCCESS, `${modelName} ${responseMessages.FETCHED}`, response);
    } catch (error) {
      next(error);
    }
  },

  update: async (req, res, next) => {
    try {
      const response = await service.update(req);

      if (!response) {
        return res.sendResponse(
          statusCodes.NOT_FOUND,
          `${modelName} ${responseMessages.NOT_FOUND}`,
          null
        );
      }

      res.sendResponse(statusCodes.SUCCESS, `${modelName} ${responseMessages.UPDATED}`, response);
    } catch (error) {
      next(error);
    }
  },

  remove: async (req, res, next) => {
    try {
      const response = await service.remove(req);

      if (!response) {
        return res.sendResponse(
          statusCodes.NOT_FOUND,
          `${modelName} ${responseMessages.NOT_FOUND}`,
          null
        );
      }

      res.sendResponse(statusCodes.SUCCESS, `${modelName} ${responseMessages.DELETED}`, null);
    } catch (error) {
      next(error);
    }
  },
});

module.exports = genericController;
