const express = require("express");
const AppError = require("./libraries/error-handler/AppError.js");
const bannerRoutes = require("./domains/banner/routes.js");
const authRoutes = require("./domains/auth/routes.js");
const aboutRoutes = require("./domains/about/routes.js");
const contactRouter = require("./domains/contact/routes.js");
const uploadRouter = require("./domains/upload/routes.js");
const galleryRouter = require("./domains/gallery/routes.js");

const apiRouter = express.Router();

apiRouter.use("/auth", authRoutes);
apiRouter.use("/banner", bannerRoutes);
apiRouter.use("/about", aboutRoutes);
apiRouter.use("/contact", contactRouter);
apiRouter.use("/image", uploadRouter);
apiRouter.use("/gallery", galleryRouter);

module.exports = (app) => {
  app.use("/api/v1", apiRouter);

  app.use("/health", (_req, res) => {
    res.status(200).json({ message: "OK" });
  });

  app.use("*", (_req, _res, next) => {
    next(new AppError("NotFoundError", "Route not found", 404));
  });
};
