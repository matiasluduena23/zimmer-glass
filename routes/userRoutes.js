const express = require("express"),
  router = express.Router(),
  { login, registerUser } = require("../controllers/userController");

router.post("/", registerUser).post("/login", login);

module.exports = router;
