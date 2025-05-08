const express = require("express");
const { createBannerDto } = require("./dto");
const { validationRequest } = require("../../middlewares/request-validation");
const { create, findAll, findById, update, remove } = require("./api");
const multerUploader = require("../../middlewares/upload-multer");
const { IdDto } = require("../../shared/dto");

const router = express.Router();

const upload = multerUploader();

router
  .route("/")
  .post(
    upload.fields([{ name: "banner_images", maxCount: 5 }]),
    validationRequest({ schema: createBannerDto }),
    create
  )
  .get(findAll);

router
  .route("/:id", validationRequest({ schema: IdDto }, true))
  .get(findById)
  .patch(upload.fields([{ name: "banner_images", maxCount: 5 }]), update)
  .delete(remove);

module.exports = router;
