require("dotenv").config();
const express = require("express"),
  port = process.env.PORT || 3000,
  app = express(),
  mongoose = require("mongoose"),
  { errorHandler } = require("./middleware/errorMiddleware");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/vidrios", require("./routes/vidrioRoutes"));

app.use(errorHandler);
mongoose
  .connect(
    `mongodb+srv://${process.env.NODE_USER}:${process.env.NODE_PAWD}@cluster0.j1ke0lv.mongodb.net/${process.env.NODE_NAME_DB}?retryWrites=true&w=majority`
  )
  .then(() => console.log("Connected to Mongo DB"))
  .catch((error) => console.log(`Error connecting to DB: ${error}`));

app.listen(port, () => console.log(`Server started on port ${port}`));
