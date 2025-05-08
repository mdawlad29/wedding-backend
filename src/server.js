const app = require("./app");
const Config = require("./configs");
const connectWithMongoDb = require("./libraries/db");

const port = Config.PORT || 5000;

async function startServer() {
  try {
    await connectWithMongoDb();
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  } catch (error) {
    console.log(`Failed to listen on port ${port}. Error: ${error.message}`);
  }
}

async function stopServer() {
  try {
    await app.close();
  } catch (error) {
    console.log(`Failed to close server. Error: ${error.message}`);
  }
}

module.exports = { startServer, stopServer };
