const User = require("../models/user"),
  jwt = require("jsonwebtoken"),
  bcrypt = require("bcryptjs"),
  asyncHandler = require("express-async-handler");

const registerUser = asyncHandler(async (req, res) => {
  const { usuario, password } = req.body;

  if (!usuario || !password) {
    res.status(400);
    throw new Error("Completa todos los campos");
  }

  //check if user exist
  const userExist = await User.findOne({ usuario });
  if (userExist) {
    res.status(400);
    throw new Error("El usuario ya existe en la base de datos");
  }

  //hash password
  const salt = await bcrypt.genSalt(10);
  const hashpassword = await bcrypt.hash(password, salt);

  const user = await User.create({
    usuario,
    password: hashpassword,
  });

  if (user) {
    res.status(201).json({
      _id: user.id,
      usuario: user.usuario,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Datos invalidos");
  }
});

const login = asyncHandler(async (req, res) => {
  const { usuario, password } = req.body;

  //check the user
  const user = await User.findOne({ usuario });

  if (user && (await bcrypt.compare(password, user.password))) {
    res.json({
      _id: user.id,
      usuario: user.usuario,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Datos invalidos");
  }
});

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

module.exports = {
  registerUser,
  login,
};
