const express = require("express");
const { create, findAll } = require("./api");
const { createContactDto } = require("./dto");
const { validationRequest } = require("../../middlewares/request-validation");

const router = express.Router();

router
  .route("/")
  .post(validationRequest({ schema: createContactDto }), create)
  .get(findAll);

module.exports = router;
