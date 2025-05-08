const express = require("express");
const { createAboutDto } = require("./dto");
const { validationRequest } = require("../../middlewares/request-validation");
const { create, findAll, findById, update, remove } = require("./api");
const multerUploader = require("../../middlewares/upload-multer");
const { IdDto } = require("../../shared/dto");
const authMiddleware = require("../../middlewares/auth");

const router = express.Router();

const upload = multerUploader();

router
  .route("/")
  .post(
    authMiddleware,
    upload.single("about_image"),
    validationRequest({ schema: createAboutDto }),
    create
  )
  .get(findAll);

router
  .route("/:id", authMiddleware, validationRequest({ schema: IdDto }, true))
  .get(findById)
  .patch(upload.single("about_image"), update)
  .delete(remove);

module.exports = router;
