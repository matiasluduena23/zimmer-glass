const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    usuario: {
      type: String,
      require: [true, "Ingrese un usuario"],
    },
    password: {
      type: String,
      require: [true, "Ingrese una contraseña"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("User", userSchema);
