require("dotenv").config();
const express = require("express"),
  port = process.env.PORT || 3000,
  app = express(),
  { errorHandler } = require("./middleware/errorMiddleware");

require("./config/db");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/vidrios", require("./routes/vidrioRoutes"));

app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));
