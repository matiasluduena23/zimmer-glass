const jwt = require("jsonwebtoken"),
  asyncHandler = require("express-async-handler"),
  User = require("../models/user");

const protect = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      //get token from header
      token = req.headers.authorization.split(" ")[1];

      //verify the token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      //get user from the token
      req.user = await User.findById(decoded.id).select("-password");

      next();
    } catch (error) {
      console.log("Token error: " + error);
      res.status(401);
      throw new Error("No autorizado");
    }
  }

  if (!token) {
    res.status(401);
    throw new Error("No autorizado, no token");
  }
});

module.exports = {
  protect,
};
