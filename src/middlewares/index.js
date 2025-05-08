const express = require("express");
const app = require("../app");
const responseMiddleware = require("./response.middleware");

const applyMiddleware = (app) => {
  app.use([express.json(), express.urlencoded({ extended: true })]);
  app.use(responseMiddleware);
};

module.exports = applyMiddleware;
