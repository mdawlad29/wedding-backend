const express = require("express");
const { findById } = require("./api");

const router = express.Router();

router.route("/public/upload/:filename").get(findById);

module.exports = router;
