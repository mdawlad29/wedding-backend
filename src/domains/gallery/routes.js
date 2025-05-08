const express = require("express");
const { create, findById, findAll } = require("./api");
const { createGalleryDto } = require("./dto");
const { validationRequest } = require("../../middlewares/request-validation");
const multerUploader = require("../../middlewares/upload-multer");
const authMiddleware = require("../../middlewares/auth");

const router = express.Router();

const upload = multerUploader();

router
  .route("/", authMiddleware)
  .post(upload.fields([{ name: "images", minCount: 5 }]), create)
  .get(findAll);

router.route("/:id", authMiddleware).get(findById);

module.exports = router;
