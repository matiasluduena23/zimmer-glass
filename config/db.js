mongoose = require("mongoose");

module.exports = mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to Mongo DB"))
  .catch((error) => console.log(`Error connecting to DB: ${error}`));
