const { Schema, model } = require("mongoose");

const camaraSchema = new Schema(
  {
    nombre: {
      type: String,
      require: [true, "Por favor ingrese una camara"],
    },
    precio: {
      type: Number,
      require: [true, "Por favor ingrese un precio"],
    },
    stock: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Camara", camaraSchema);
