module.exports = (req, res, next) => {
  res.sendResponse = (status = 200, message = "Default Message", data = null, meta = null) => {
    res.status(status).json({ status, message, data, meta });
  };
  next();
};
