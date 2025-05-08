const { ValidationError } = require("joi");

const errorHandler = (err, req, res, next) => {
  console.log("Error handler:", err);

  if (err instanceof ValidationError || err.isJoi) {
    return res.status(400).json({
      error: "Validation error",
      details: err.details.map((detail) => ({
        message: detail.message,
      })),
    });
  }

  return res.status(err.HTTPStatus || 500).json({
    status: err.HTTPStatus || 500,
    message: err.message || "Something went wrong!",
    error: err || "Internal Server Error",
  });
};

module.exports = errorHandler;
