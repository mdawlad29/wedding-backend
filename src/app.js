const express = require("express");
const applyMiddleware = require("./middlewares");
const errorHandler = require("./libraries/error-handler");
const app = express();

console.info("Applying Common middlewares...");
applyMiddleware(app);

console.info("Define routes...");
require("./routes")(app);

app.use(errorHandler);

module.exports = app;
