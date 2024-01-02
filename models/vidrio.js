const { Schema, model } = require("mongoose");

const vidrioSchema = new Schema(
  {
    nombre: {
      type: String,
      require: [true, "Por favor ingrese un nombre"],
    },
    precio: {
      type: Number,
      require: [true, "Por favor ingrese un precio"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Vidrio", vidrioSchema);
