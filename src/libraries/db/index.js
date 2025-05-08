const mongoose = require("mongoose");
const Config = require("../../configs");

const connectWithMongoDb = async () => {
  const MONGODB_URI = Config.MONGODB_URI;

  console.info("Connecting to MongoDB database...");
  mongoose.connection.once("open", () => {
    console.info("Mongoose connection is open");
  });
  mongoose.connection.on("error", () => {
    console.error("Failed to connect to MongoDB database");
    process.exit(1);
  });

  await mongoose.connect(MONGODB_URI, {
    autoIndex: true,
    autoCreate: true,
  });

  console.info("Connected to MongoDB database successfully");
};

module.exports = connectWithMongoDb;
