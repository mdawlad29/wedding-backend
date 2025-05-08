const validationRequest = ({ schema, isParam = false }) => {
  return (req, res, next) => {
    const input = isParam ? req.params : req.body;

    const validationResult = schema.validate(input, {
      abortEarly: false,
    });

    if (validationResult.error) {
      const errorDetails = validationResult.error.details.map((detail) => ({
        key: detail.path.join("."), // Corrected key access
        message: detail.message.replace(/\"/g, ""), // Removed quotes from messages
      }));

      console.log(
        `${req.method} ${req.originalUrl} - Validation Error: ${JSON.stringify(errorDetails)}`
      );

      return res.status(400).json({
        status: 400,
        message: "Dto Validation Error",
        errors: errorDetails,
      });
    }

    next();
  };
};

module.exports = { validationRequest };
