const { statusCodes, responseMessages } = require("../../constants");
const authService = require("./service");

const modelName = "Auth";

const registration = async (req, res, next) => {
  try {
    const response = await authService.create(req);
    res.sendResponse(statusCodes.CREATED, `${modelName} ${responseMessages.CREATED}`, response);
  } catch (error) {
    next(error);
  }
};

const login = async (req, res, next) => {
  try {
    const result = await authService.login(req.body);

    if (!result) {
      return res.sendResponse(statusCodes.UNAUTHORIZED, "Invalid credentials", null);
    }

    res.sendResponse(statusCodes.SUCCESS, `${modelName} logged in successfully`, result);
  } catch (error) {
    next(error);
  }
};

const changePassword = async (req, res, next) => {
  try {
    const response = await authService.changePassword(req);
    res.sendResponse(statusCodes.SUCCESS, `${modelName} ${responseMessages.UPDATED}`, response);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  registration,
  login,
  changePassword,
};
