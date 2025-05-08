const express = require("express");
const { validationRequest } = require("../../middlewares/request-validation");
const { createAuthDto, loginDto, changePasswordDto } = require("./dto");
const { registration, login, changePassword } = require("./api");
const authMiddleware = require("../../middlewares/auth");

const router = express.Router();

router.route("/register").post(validationRequest({ schema: createAuthDto }), registration);
router.route("/login").post(validationRequest({ schema: loginDto }), login);
router
  .route("/change-password")
  .post(authMiddleware, validationRequest({ schema: changePasswordDto }), changePassword);

module.exports = router;
